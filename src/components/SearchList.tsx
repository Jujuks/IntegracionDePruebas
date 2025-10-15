import { useState } from "react";

const initialNames = [
  "Ana",
  "Carlos",
  "Beatriz",
  "David",
  "Elena",
  "Fernando",
  "Gabriela",
  "Hugo",
  "Isabel",
  "Javier"
];

export default function SearchList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [names] = useState<string[]>(initialNames);

  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="space-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">Buscar nombres:</span>
          <input
            type="text"
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Escribe para buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 min-h-[250px] border border-slate-200">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Resultados:</h2>
          {filteredNames.length > 0 ? (
            <ul className="space-y-2">
              {filteredNames.map((name, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                  <span className="font-medium text-slate-700">{name}</span>
                </div>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-32">
              <p className="text-slate-500 italic text-center">No se encontraron resultados</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}