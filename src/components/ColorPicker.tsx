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
    <div className="h-full w-full p-6">
      <h1 className="text-2xl font-bold mb-4">Selector de Colores</h1>

      <div className="flex flex-col gap-4 max-w-sm">
        <label className="flex flex-col">
          <span className="mb-1 font-medium">Selecciona un color:</span>
          <input
            type="color"
            value={color}
            onChange={(e) => handleColorChange(e.target.value)}
            className="w-full h-12 border rounded-lg cursor-pointer"
          />
        </label>

        <div
          className="w-full h-32 border-2 border-gray-300 rounded-lg flex items-center justify-center text-white font-bold text-lg"
          style={{ backgroundColor: color }}
        >
          {color.toUpperCase()}
        </div>
      </div>
    </div>
  );
}