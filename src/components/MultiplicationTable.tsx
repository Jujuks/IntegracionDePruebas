// src\components\MultiplicationTable.tsx
import { useState } from "react";

export default function MultiplicationTable() {
  const [number, setNumber] = useState<number | null>(null);
  const [table, setTable] = useState<number[]>([]);

  const generateTable = () => {
    if (number === null || isNaN(number)) return;
    const result = Array.from({ length: 10 }, (_, i) => (i + 1) * number);
    setTable(result);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-center">
        <input
          type="number"
          className="border border-slate-300 rounded-lg p-3 w-full sm:w-48 text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Número"
          value={number ?? ""}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button
          onClick={generateTable}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Generar Tabla
        </button>
      </div>

      {table.length > 0 && (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-md border border-slate-200">
          <h2 className="text-xl font-bold mb-4 text-center text-slate-800">Tabla del {number}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {table.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-slate-200 text-center">
                <span className="font-medium text-slate-700">
                  {number} × {index + 1} = <span className="text-blue-600 font-bold">{value}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
