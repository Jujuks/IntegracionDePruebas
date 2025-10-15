import { useState } from "react";

export default function UnitConverter() {
  const [celsius, setCelsius] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);

  const handleConvert = () => {
    if (celsius === null || isNaN(celsius)) return;
    const result = (celsius * 9) / 5 + 32;
    setFahrenheit(result);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="flex justify-center mb-6">
        <img
          src="/formula_celsius.jpg"
          alt="Fórmula de conversión"
          className="w-48 h-auto rounded-lg shadow-md"
        />
      </div>

      <div className="space-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">Celsius (°C):</span>
          <input
            type="number"
            className="w-full border border-slate-300 rounded-lg p-3 text-center focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Ingrese valor en Celsius"
            value={celsius ?? ""}
            onChange={(e) => setCelsius(parseFloat(e.target.value))}
          />
        </label>

        <div className="flex justify-center">
          <button
            onClick={handleConvert}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Convertir
          </button>
        </div>

        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">Fahrenheit (°F):</span>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg p-3 bg-slate-50 text-center font-medium text-slate-800"
            value={fahrenheit !== null ? fahrenheit.toFixed(2) : ""}
            readOnly
          />
        </label>
      </div>
    </div>
  );
}
