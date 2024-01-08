// src/components/StreamSchedule.js
import moment from 'moment-timezone';

export default function StreamSchedule() {
  const schedule = [
    { day: "Monday", time: "OFF" },
    { day: "Tuesday", time: "OFF" },
    { day: "Wednesday", time: "11:00 - 15:00" },
    { day: "Thursday", time: "11:00 - 15:00" },
    { day: "Friday", time: "11:00 - 15:00" },
    { day: "Saturday", time: "11:00 - 15:00" },
    { day: "Sunday", time: "11:00 - 15:00" },
  ];

  const convertToLocaleTime = (time) => {
    if (time === "OFF") return time;

    const [startTime, endTime] = time.split(" - ");
    return `${convertTime(startTime)} - ${convertTime(endTime)}`;
  };

  const convertTime = (time) => {
    const format = 'HH:mm';
    const timezone = 'America/New_York'; // EST timezone
    const localTime = moment.tz(time, format, timezone).clone().tz(moment.tz.guess());
    return localTime.format('h:mm A'); // Format to 12-hour time with AM/PM
  };

  return (
    <div id="schedule" className="bg-gray-900 text-gray-200 px-64 py-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-purple-500 text-center">Stream Schedule (EST)</h2>
        <ul className="space-y-2">
            {schedule.map((item, index) => (
                <li key={index} className="flex justify-between items-center text-center">
                    <span className="text-lg font-medium">{item.day}</span>
                    <span className={`font-semibold ${item.time !== 'OFF' ? 'text-purple-400' : ''}`}>
                        {convertToLocaleTime(item.time)}
                    </span>
                </li>
        ))}
        </ul>
  </div>
  );
}
