import moment from 'moment-timezone';
import { useState, useEffect } from 'react';

export default function StreamSchedule() {
  const schedule = [
    { day: "Monday", time: "11:00 - 15:00" },
    { day: "Tuesday", time: "OFF" },
    { day: "Wednesday", time: "OFF" },
    { day: "Thursday", time: "11:00 - 15:00" },
    { day: "Friday", time: "11:00 - 15:00" },
    { day: "Saturday", time: "OFF" },
    { day: "Sunday", time: "11:00 - 15:00" },
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

  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const currentStatus = getCurrentStreamStatus();
      setStatusMessage(currentStatus);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getCurrentStreamStatus = () => {
    const now = moment();
    const today = now.format('dddd');
    const scheduleItem = schedule.find(item => item.day === today);

    if (scheduleItem && scheduleItem.time !== 'OFF') {
      const [startTime, endTime] = scheduleItem.time.split(' - ');
      const startMoment = moment.tz(`${today} ${startTime}`, `dddd HH:mm`, 'America/New_York').tz(moment.tz.guess());
      const endMoment = moment.tz(`${today} ${endTime}`, `dddd HH:mm`, 'America/New_York').tz(moment.tz.guess());

      if (now.isBetween(startMoment, endMoment)) {
        return 'Currently Live!';
      } else {
        return getNextStreamCountdown(now);
      }
    } else {
      return getNextStreamCountdown(now);
    }
  };

  const getNextStreamCountdown = (now) => {
    for (let i = 0; i < 7; i++) {
      const nextDay = now.clone().add(i, 'days').format('dddd');
      const scheduleItem = schedule.find(item => item.day === nextDay && item.time !== 'OFF');

      if (scheduleItem) {
        const [startTime, ] = scheduleItem.time.split(' - ');
        const nextStreamStart = moment.tz(`${nextDay} ${startTime}`, `dddd HH:mm`, 'America/New_York').tz(moment.tz.guess());
        if (now.isBefore(nextStreamStart)) {
          const duration = moment.duration(nextStreamStart.diff(now));
          return (
            <div>
              Next Stream In: <br />
              {duration.days()}d {duration.hours()}h {duration.minutes()}m {duration.seconds()}s
            </div>
          );
        }
      }
    }
    return 'No upcoming streams scheduled.';
  };

  const twitchChannelUrl = "http://www.twitch.tv/pixelcafevt";

  const renderLiveStatus = () => {
    if (statusMessage === 'Currently Live!') {
      return (
        <a href={twitchChannelUrl} target="_blank" rel="noopener noreferrer" className="flashing-text">
          <p className="text-xl text-center my-4 font-bold mb-4 text-purple-500 italic flashing-text">
            {statusMessage}
          </p>
        </a>
      );
    } else {
      return (
        <p className="text-xl text-center my-4 font-bold mb-4 text-purple-500 italic">
          {statusMessage}
        </p>
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div id="schedule" className="bg-gray-900 text-gray-200 py-4 rounded-lg shadow-lg max-w-full">
        <h2 className="text-2xl font-bold mb-4 text-purple-500 text-center">
          Stream Schedule <br /><em>(converted to your local time)</em>
        </h2>
        <ul className="space-y-2">
          {schedule.map((item, index) => {
            const converted = convertToLocaleTime(item.time, item.day);
            return (
              <li key={index} className="flex justify-between items-center px-8 md:px-64 text-center">
                <span className="text-lg font-medium">{converted.day}</span>
                <span className={`font-semibold ${item.time !== 'OFF' ? 'text-purple-400' : ''}`}>
                  {converted.time}
                </span>
              </li>
            );
          })}
        </ul>
        <div className="container mx-auto p-4">
          {renderLiveStatus()}
        </div>
      </div>
    </div>
  );
}
