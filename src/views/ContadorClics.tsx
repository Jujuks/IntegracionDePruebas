import ClickCounter from "../components/ClickCounter";
export default function ContadorClics() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contador de Clics
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Interactúa con el contador para ver cómo cambia el estado
          </p>
        </div>
        <div className="flex justify-center">
          <ClickCounter />
        </div>
      </div>
    </div>
  );
}
