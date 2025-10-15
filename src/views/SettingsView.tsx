// src/views/SettingsView.tsx

export default function SettingsView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Configuración
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Preferencias de la aplicación
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Preferencias de la aplicación
          </h2>
          <p className="text-slate-600">
            Aquí puedes configurar las preferencias de la aplicación según tus necesidades.
          </p>
        </div>
      </div>
    </div>
  );
}
