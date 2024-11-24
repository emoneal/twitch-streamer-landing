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

  const [localizedSchedule, setLocalizedSchedule] = useState([]);
  const [nextStreamTime, setNextStreamTime] = useState(null);
  const divRefs = useRef([]);

  useEffect(() => {
    const convertToLocaleTime = (time, day) => {
      if (time === "OFF") {
        return null; // Exclude "OFF" days from the schedule
      }

      const [startTime, endTime] = time.split(" - ");
      const convertedStartTime = convertTime(startTime, day);
      const convertedEndTime = convertTime(endTime, day);

      if (convertedStartTime.day !== convertedEndTime.day) {
        return {
          time: `${convertedStartTime.time} - ${convertedEndTime.time}`,
          day: `${convertedStartTime.day} - ${convertedEndTime.day}`,
        };
      } else {
        return {
          time: `${convertedStartTime.time} - ${convertedEndTime.time}`,
          day: convertedStartTime.day,
        };
      }
    };

    const convertTime = (time, day) => {
      const timezone = "America/New_York"; // EST timezone
      const localTime = moment.tz(`${day} ${time}`, `dddd HH:mm`, timezone).clone().tz(moment.tz.guess());
      return {
        time: localTime.format("h:mm A"), // Format to 12-hour time with AM/PM
        day: localTime.format("dddd"), // Get the day of the week
      };
    };

    const getLocalizedSchedule = () => {
      return schedule
        .map(item => convertToLocaleTime(item.time, item.day))
        .filter(item => item !== null); // Filter out "OFF" days
    };

    const getNextStreamStart = () => {
      const now = moment();

      for (let i = 0; i < 7; i++) {
        const nextDay = now.clone().add(i, "days").format("dddd");
        const scheduleItem = schedule.find(item => item.day === nextDay && item.time !== "OFF");

        if (scheduleItem && scheduleItem.time !== "OFF") {
          const [startTime] = scheduleItem.time.split(" - ");
          const [startHour, startMinute] = startTime.split(":");
          const streamStart = now
            .clone()
            .add(i, "days")
            .hour(parseInt(startHour))
            .minute(parseInt(startMinute))
            .second(0);

          if (streamStart.isAfter(now)) {
            return streamStart;
          }
        }
      }

      return null; // No future streams scheduled
    };

    setLocalizedSchedule(getLocalizedSchedule());
    setNextStreamTime(getNextStreamStart());
  }, []);

  const renderNextStreamTimer = () => {
    const now = moment();

    if (nextStreamTime) {
      const duration = moment.duration(nextStreamTime.diff(now));
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      const timeText = `${days > 0 ? `${days}d ` : ""}${hours}h ${minutes}m ${seconds}s`;

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
    divRefs.current.forEach(ref => (ref.style.width = `${maxWidth}px`));
  }, [localizedSchedule]);

  if (localizedSchedule.length === 0) {
    return null; // Prevent SSR/CSR mismatch
  }

  return (
    <div className="container mx-auto px-6 py-6">
      <div id="schedule" className="bg-gray-900 text-gray-200 py-4 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-bold mb-10 text-purple-500 text-center">
          Stream Schedule <br />
          <em>(converted to your local time)</em>
        </h2>
        <div className="text-center">
          {localizedSchedule.map((item, index) => (
            <div key={index} className="text-lg md:text-xl text-center my-8">
              <div ref={el => (divRefs.current[index] = el)} className="bg-gray-800 rounded-md p-8 w-60 inline-block">
                <span className="font-medium block">{item.day}</span>
                <span className={`font-semibold block ${item.time !== "OFF" ? "text-purple-400" : ""}`}>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="container mx-auto px-4">{renderNextStreamTimer()}</div>
      </div>
    </div>
  );
}
