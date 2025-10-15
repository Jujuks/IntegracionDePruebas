import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const [seconds, setSeconds] = useState<number | null>(null);
  const [remaining, setRemaining] = useState<number>(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (seconds !== null && seconds > 0) {
      setRemaining(seconds);
      setIsRunning(true);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && remaining > 0) {
      interval = setInterval(() => {
        setRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, remaining]);

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="space-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">Segundos:</span>
          <input
            type="number"
            className="w-full border border-slate-300 rounded-lg p-3 text-center focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Ingrese segundos"
            value={seconds ?? ""}
            onChange={(e) => setSeconds(parseInt(e.target.value) || null)}
            disabled={isRunning}
          />
        </label>

        <div className="flex justify-center">
          <button
            onClick={handleStart}
            disabled={isRunning || seconds === null || seconds <= 0}
            className="px-8 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 disabled:bg-slate-400 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 disabled:transform-none"
          >
            {isRunning ? "Ejecutándose..." : "Iniciar"}
          </button>
        </div>

        <div className="text-center">
          <div className="text-6xl font-mono bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl border-2 border-orange-200 shadow-inner">
            {remaining}
          </div>
        </div>
      </div>
    </div>
  );
}