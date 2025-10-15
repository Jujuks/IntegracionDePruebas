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
    <div className="h-full w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Contador Regresivo</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Segundos:</span>
          <input
            type="number"
            className="border rounded-lg p-2"
            placeholder="Ingrese segundos"
            value={seconds ?? ""}
            onChange={(e) => setSeconds(parseInt(e.target.value) || null)}
            disabled={isRunning}
          />
        </label>

        <button
          onClick={handleStart}
          disabled={isRunning || seconds === null || seconds <= 0}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
        >
          Iniciar
        </button>

        <div className="text-center text-4xl font-mono bg-gray-100 p-4 rounded-lg">
          {remaining}
        </div>
      </div>
    </div>
  );
}