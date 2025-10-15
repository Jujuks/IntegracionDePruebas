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
    <div className="h-full w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Buscador en Lista</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Buscar nombres:</span>
          <input
            type="text"
            className="border rounded-lg p-2"
            placeholder="Escribe para buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>

        <div className="bg-gray-50 rounded-lg p-4 min-h-[200px]">
          <h2 className="text-lg font-semibold mb-2">Resultados:</h2>
          {filteredNames.length > 0 ? (
            <ul className="space-y-1">
              {filteredNames.map((name, index) => (
                <li key={index} className="text-gray-700">
                  {name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
}