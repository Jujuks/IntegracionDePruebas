import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaClock,
  FaHourglassHalf,
  FaPalette,
  FaSearch,
  FaCalculator,
  FaRuler,
  FaKey,
  FaMouse,
  FaList,
  FaCubes
} from "react-icons/fa";

export default function HomeContent() {
  const features = [
    {
      title: "Reloj Digital",
      description: "Muestra la hora actual en formato HH:MM:SS con actualización automática",
      icon: <FaClock className="w-8 h-8" />,
      route: "/digitalclock",
      color: "text-blue-600"
    },
    {
      title: "Contador Regresivo",
      description: "Cuenta regresiva configurable con input de segundos",
      icon: <FaHourglassHalf className="w-8 h-8" />,
      route: "/countdowntimer",
      color: "text-orange-600"
    },
    {
      title: "Selector de Colores",
      description: "Selecciona colores con persistencia en localStorage",
      icon: <FaPalette className="w-8 h-8" />,
      route: "/colorpicker",
      color: "text-purple-600"
    },
    {
      title: "Buscador en Lista",
      description: "Filtra nombres en tiempo real con búsqueda insensible a mayúsculas",
      icon: <FaSearch className="w-8 h-8" />,
      route: "/searchlist",
      color: "text-green-600"
    }
  ];

  const exercises = [
    { name: "Tablas de Multiplicar", route: "/tablasmul", icon: <FaCalculator /> },
    { name: "Conversor de Unidades", route: "/conversorunid", icon: <FaRuler /> },
    { name: "Validador de Contraseñas", route: "/validcontrasena", icon: <FaKey /> },
    { name: "Contador de Clics", route: "/contadorclics", icon: <FaMouse /> },
    { name: "Lista de Tareas", route: "/listareas", icon: <FaList /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
              <FaCubes className="w-16 h-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Prácticas Desarrollo
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Proyecto de pruebas unitarias con Jest y componentes React interactivos.
            Explora las diferentes funcionalidades implementadas con sus respectivas pruebas.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => document.querySelector('[data-accordion="exercises"]')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              📚 Ver Todos los Componentes
            </button>
          </div>
        </motion.div>

        {/* New Components Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            🆕 Componentes Nuevos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200"
              >
                <div className={`mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 text-sm">
                  {feature.description}
                </p>
                <Link
                  to={feature.route}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Ver componente →
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exercises Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-16"
          data-accordion="exercises"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800">
            📚 Todos los Componentes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercises.map((exercise, index) => (
              <motion.div
                key={exercise.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 border border-slate-200"
              >
                <Link
                  to={exercise.route}
                  className="flex items-center gap-3 text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <span className="text-blue-600">
                    {exercise.icon}
                  </span>
                  <span className="font-medium">{exercise.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">
            🛠️ Tecnologías Utilizadas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "React", color: "bg-blue-500" },
              { name: "TypeScript", color: "bg-blue-600" },
              { name: "Jest", color: "bg-red-600" },
              { name: "Testing Library", color: "bg-orange-500" },
              { name: "Tailwind CSS", color: "bg-cyan-500" },
              { name: "Vite", color: "bg-purple-600" }
            ].map((tech) => (
              <span
                key={tech.name}
                className={`${tech.color} text-white px-4 py-2 rounded-full text-sm font-medium shadow-md`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
