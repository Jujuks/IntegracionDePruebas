// src/views/LayoutsView.tsx

export default function LayoutsView() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ejemplos de Layouts
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Demostración de diferentes técnicas de layout con Tailwind CSS
          </p>
        </div>

        <div className="space-y-12">
          {/* A) Container básico */}
          <section className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
              Container básico
            </h2>
            <p className="text-slate-600 text-lg">
              Usa <code className="bg-slate-100 px-2 py-1 rounded">container mx-auto px-4</code> para crear secciones
              centradas con padding lateral responsivo.
            </p>
          </section>

          {/* B) MaxWidth para textos */}
          <section className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <div className="max-w-prose md:max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                MaxWidth para textos
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Controla el ancho máximo del bloque de texto con{" "}
                <code className="bg-slate-100 px-2 py-1 rounded">max-w-prose</code> o <code className="bg-slate-100 px-2 py-1 rounded">max-w-3xl</code> y centra con{" "}
                <code className="bg-slate-100 px-2 py-1 rounded">mx-auto</code>. Esto mejora la legibilidad en pantallas
                grandes.
              </p>
            </div>
          </section>

          {/* C) Grilla centrada dentro de un container */}
          <section className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
              Grid dentro de container
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-slate-200 p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-semibold text-slate-800">Card {i + 1}</h4>
                  <p className="text-slate-600 mt-2">Contenido de ejemplo</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
