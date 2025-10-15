import { useEffect, useState } from "react";

export default function ClickCounter() {
  const [count, setCount] = useState(() => {
    const savedCount = localStorage.getItem("click-counter");
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem("click-counter", count.toString());
  }, [count]);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-8 text-center">

      <div className="mb-8">
        <p className="text-lg text-slate-600 mb-2">Has hecho clic:</p>
        <div className="text-6xl font-bold text-blue-600 bg-blue-50 rounded-xl p-4 border-2 border-blue-200">
          {count}
        </div>
        <p className="text-lg text-slate-600 mt-2">veces</p>
      </div>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-8 py-4 bg-blue-600 text-white rounded-xl shadow-lg hover:shadow-xl font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-blue-700"
      >
        Haz clic aquí
      </button>
    </div>
  );

}