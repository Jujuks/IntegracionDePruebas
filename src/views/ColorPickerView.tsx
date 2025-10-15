import ColorPicker from "../components/ColorPicker";

export default function ColorPickerView() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Selector de Colores</h1>
      <ColorPicker />
    </div>
  );
}