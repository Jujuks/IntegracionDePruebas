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
    <div className="text-center text-5xl font-mono p-8 bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-xl shadow-lg border-2 border-slate-700">
      {time}
    </div>
  );
};
