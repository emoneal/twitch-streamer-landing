'use client';
import React, { useEffect, useState } from 'react';
import moment from 'moment-timezone';

// Your schedule (America/New_York). Only the *start* time matters for the timer.
const SCHEDULE = [
  { day: 'Monday',    time: 'OFF' },
  { day: 'Tuesday',   time: 'OFF' },
  { day: 'Wednesday', time: '17:00 - 21:00' },
  { day: 'Thursday',  time: 'OFF' },
  { day: 'Friday',    time: 'OFF' },
  { day: 'Saturday',  time: '17:00 - 21:00' },
  { day: 'Sunday',    time: '17:00 - 21:00' },
];

const TZ = 'America/New_York';

function nextStreamStartNY() {
  const nowNY = moment.tz(TZ);

  // look up to 8 days ahead for the next start
  for (let add = 0; add < 8; add++) {
    const d = nowNY.clone().add(add, 'days');
    const dayName = d.format('dddd');
    const item = SCHEDULE.find(x => x.day === dayName);
    if (!item || item.time === 'OFF') continue;

    const [start] = item.time.split(' - '); // "HH:mm"
    const [H, M] = start.split(':').map(Number);

    const startNY = d.clone().hour(H).minute(M).second(0).millisecond(0);
    if (startNY.isAfter(nowNY)) {
      return startNY; // moment in NY tz
    }
  }
  // fallback: one week later, same time as today if today is stream day; otherwise just next Sunday 17:00
  return nowNY.clone().add(7, 'days').hour(17).minute(0).second(0).millisecond(0);
}

export default function NextStreamTimer() {
  const [mounted, setMounted] = useState(false);
  const [targetNY, setTargetNY] = useState(null);
  const [nowNY, setNowNY] = useState(null);

  useEffect(() => {
    setMounted(true);
    const firstTarget = nextStreamStartNY();
    setTargetNY(firstTarget);
    setNowNY(moment.tz(TZ));

    const id = setInterval(() => setNowNY(moment.tz(TZ)), 1000);
    return () => clearInterval(id);
  }, []);

  // SSR placeholder to prevent hydration mismatch
  if (!mounted || !targetNY || !nowNY) {
    return (
      <div className="text-center">
        <div className="font-semibold">Next stream in:</div>
        <div className="mt-1 inline-flex gap-2 rounded-xl bg-black/40 border border-white/10 px-3 py-2">
          <span>--d</span><span>--h</span><span>--m</span><span>--s</span>
        </div>
        <div className="text-xs opacity-70 mt-1">Wed • Sat • Sun @ 5:00 PM ET</div>
      </div>
    );
  }

  // if passed, recompute next
  if (nowNY.isAfter(targetNY)) {
    const nxt = nextStreamStartNY();
    setTargetNY(nxt);
  }

  const diffSec = Math.max(0, targetNY.diff(nowNY, 'seconds'));
  const days = Math.floor(diffSec / 86400);
  const hours = Math.floor((diffSec % 86400) / 3600);
  const mins = Math.floor((diffSec % 3600) / 60);
  const secs = diffSec % 60;

  return (
    <div className="text-center">
      <div className="font-semibold">Next stream in:</div>
      <div className="mt-1 inline-flex items-center gap-2 rounded-xl bg-black/40 border border-white/10 px-3 py-2">
        <span className="tabular-nums">{days}d</span>
        <span className="tabular-nums">{hours}h</span>
        <span className="tabular-nums">{mins}m</span>
        <span className="tabular-nums">{secs}s</span>
      </div>
      <div className="text-xs opacity-70 mt-1">Wed • Sat • Sun @ 5:00 PM ET</div>
    </div>
  );
  
}
