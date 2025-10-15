import { useState, useEffect } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    const savedColor = localStorage.getItem("selected-color");
    if (savedColor) {
      setColor(savedColor);
    }
  }, []);

  const handleColorChange = (newColor: string) => {
    setColor(newColor);
    localStorage.setItem("selected-color", newColor);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="space-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-3">Selecciona un color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-full h-16 border-2 border-slate-300 rounded-lg cursor-pointer focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </label>

        <div
          className="w-full h-40 border-4 border-slate-300 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-inner"
          style={{ backgroundColor: color }}
        >
          {color.toUpperCase()}
        </div>
      </div>
    </div>
  );
}