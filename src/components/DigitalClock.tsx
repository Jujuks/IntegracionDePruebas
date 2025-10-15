import { useEffect, useState } from "react";

const formatTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

export const DigitalClock = () => {
  const [time, setTime] = useState<string>(formatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center text-3xl font-mono p-4 bg-gray-800 text-white rounded-xl shadow-md">
      {time}
    </div>
  );
};
