import moment from 'moment-timezone';
import { useState, useEffect, useRef } from 'react';

export default function StreamSchedule() {
  const schedule = [
    { day: "Monday", time: "OFF" },
    { day: "Tuesday", time: "11:00 - 17:00" },
    { day: "Wednesday", time: "OFF" },
    { day: "Thursday", time: "11:00 - 17:00" },
    { day: "Friday", time: "11:00 - 17:00" },
    { day: "Saturday", time: "OFF" },
    { day: "Sunday", time: "OFF" },
  ];

  const convertToLocaleTime = (time, day) => {
    if (time === "OFF") {
      const localDay = moment.tz(day, 'dddd', 'America/New_York').tz(moment.tz.guess()).format('dddd');
      return { time: "OFF", day: localDay };
    }
  
    const [startTime, endTime] = time.split(" - ");
    const convertedStartTime = convertTime(startTime, day);
    const convertedEndTime = convertTime(endTime, day);
  
    if (convertedStartTime.day !== convertedEndTime.day) {
      return {
        time: `${convertedStartTime.time} - ${convertedEndTime.time}`,
        day: `${convertedStartTime.day} - ${convertedEndTime.day}`
      };
    } else {
      return {
        time: `${convertedStartTime.time} - ${convertedEndTime.time}`,
        day: convertedStartTime.day
      };
    }
  };

  const convertTime = (time, day) => {
    const format = 'HH:mm';
    const timezone = 'America/New_York'; // EST timezone
    const localTime = moment.tz(`${day} ${time}`, `dddd ${format}`, timezone).clone().tz(moment.tz.guess());
    return {
      time: localTime.format('h:mm A'), // Format to 12-hour time with AM/PM
      day: localTime.format('dddd') // Get the day of the week
    };
  };

  const [nextStreamTime, setNextStreamTime] = useState(null);
  const divRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextTime = getNextStreamStart();
      setNextStreamTime(nextTime);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getNextStreamStart = () => {
    const now = moment();
    const today = now.format('dddd');

    // Find the current day's schedule
    const todaySchedule = schedule.find(item => item.day === today && item.time !== 'OFF');

    if (todaySchedule) {
      const [startTime, ] = todaySchedule.time.split(' - ');
      const [startHour, startMinute] = startTime.split(':');
      const startMoment = moment().hour(parseInt(startHour)).minute(parseInt(startMinute));

      // If the current time is before the start of today's stream
      if (now.isBefore(startMoment)) {
        return startMoment;
      }
    }

    // Find the next scheduled stream after today
    const nextScheduledDay = schedule.find(item => moment().isoWeekday(item.day).isAfter(now) && item.time !== 'OFF');

    if (nextScheduledDay) {
      const [nextStartTime, ] = nextScheduledDay.time.split(' - ');
      const [nextStartHour, nextStartMinute] = nextStartTime.split(':');
      return moment().isoWeekday(nextScheduledDay.day).hour(parseInt(nextStartHour)).minute(parseInt(nextStartMinute));
    }

    return null;
  };

  const renderNextStreamTimer = () => {
    const now = moment();

    // Check if the current time falls within any of the stream time intervals
    const isCurrentlyLive = schedule.some(item => {
      if (item.time === "OFF") return false;

      const [startTime, endTime] = item.time.split(' - ');
      const [startHour, startMinute] = startTime.split(':');
      const [endHour, endMinute] = endTime.split(':');
      const streamStart = moment().isoWeekday(item.day).hour(parseInt(startHour)).minute(parseInt(startMinute));
      const streamEnd = moment().isoWeekday(item.day).hour(parseInt(endHour)).minute(parseInt(endMinute));

      return now.isBetween(streamStart, streamEnd);
    });

    if (isCurrentlyLive) {
      return (
        <a href="http://www.twitch.tv/pixelcafevt" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-center my-2 font-bold text-purple-500 italic block animate-pulse">
          Currently Live!
        </a>
      );
    } else if (nextStreamTime) {
      const duration = moment.duration(nextStreamTime.diff(now));
      const days = duration.days() ? `${duration.days()}d ` : '';
      const hours = duration.hours() ? `${duration.hours()}h ` : '';
      const minutes = duration.minutes() ? `${duration.minutes()}m ` : '';
      const seconds = duration.seconds() ? `${duration.seconds()}s` : '';

      const timeText = `${days}${hours}${minutes}${seconds}`;

      return (
        <div className="text-lg md:text-xl text-center my-2 font-bold text-purple-500 italic block">
          Next Stream In: <br />
          {timeText}
        </div>
      );
    } else {
      return (
        <div className="text-lg md:text-xl text-center my-2 font-bold text-purple-500 italic block">
          No future streams scheduled.
        </div>
      );
    }
  };

  // Get the maximum width of the divs
  useEffect(() => {
    const maxWidth = Math.max(...divRefs.current.map(ref => ref.offsetWidth));
    divRefs.current.forEach(ref => ref.style.width = `${maxWidth}px`);
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <div id="schedule" className="bg-gray-900 text-gray-200 py-4 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-purple-500 text-center">
          Stream Schedule <br /><em>(converted to your local time)</em>
        </h2>
        <div className="text-center">
          {schedule.map((item, index) => {
            const converted = convertToLocaleTime(item.time, item.day);
            return (
              <div key={index} className="text-lg md:text-xl text-center my-2">
                <div ref={el => divRefs.current[index] = el} className="bg-gray-800 rounded-md p-4 inline-block">
                  <span className="font-medium block">{converted.day}</span>
                  <span className={`font-semibold block ${item.time !== 'OFF' ? 'text-purple-400' : ''}`}>
                    {converted.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="container mx-auto px-4">
          {renderNextStreamTimer()}
          <br />
          <p>New Videos every Monday and Saturday!</p>
        </div>
      </div>
    </div>
  );
}
