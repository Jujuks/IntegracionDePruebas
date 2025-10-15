import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaCube,
  FaColumns,
  FaMicrophone,
  FaShapes,
  FaCalculator,
  FaRuler,
  FaKey,
  FaMouse,
  FaList,
  FaClock,
  FaPalette,
  FaSearch,
  FaHourglassHalf 
} from "react-icons/fa";

interface SidebarItem {
  label: string;
  route: string;
  icon?: React.ReactNode;
}

const mainItems: SidebarItem[] = [
  { label: "Inicio", route: "/", icon: <FaHome /> },
  { label: "Three.js Demo", route: "/three", icon: <FaCube /> },
  { label: "Responsive Layouts", route: "/layouts", icon: <FaColumns /> },
  { label: "Text-to-Speech", route: "/tts", icon: <FaMicrophone /> },
  { label: "Figuras Geometricas", route: "/three_2", icon: <FaShapes /> },
];

const exerciseItems: SidebarItem[] = [
  { label: "Tablas de Multiplicar", route: "/tablasmul", icon: <FaCalculator /> },
  { label: "Conversor de Unidades", route: "/conversorunid", icon: <FaRuler /> },
  { label: "Validador de Contraseñas", route: "/validcontrasena", icon: <FaKey /> },
  { label: "Contador de Clics con Almacenamiento", route: "/contadorclics", icon: <FaMouse /> },
  { label: "Lista de Tareas", route: "/listareas", icon: <FaList /> },
  // 👇 Nuevos componentes agregados:
  { label: "Reloj Digital", route: "/digitalclock", icon: <FaClock /> },
  { label: "Contador Regresivo", route: "/countdowntimer", icon: <FaHourglassHalf /> },
  { label: "Selector de Colores", route: "/colorpicker", icon: <FaPalette /> },
  { label: "Buscador en Lista", route: "/searchlist", icon: <FaSearch /> },
];

export default function Sidebar() {
  const [openMain, setOpenMain] = useState(false);
  const [openExercises, setOpenExercises] = useState(false);

  const renderNavItem = ({ label, route, icon }: SidebarItem) => (
    <NavLink
      key={route}
      to={route}
      className={({ isActive }) =>
        `w-full text-left flex items-center gap-2 justify-between rounded-lg px-3 py-2 text-slate-700
         hover:bg-slate-50
         ${isActive ? "bg-emerald-50 text-emerald-700" : ""}`
      }
    >
      <div className="flex items-center gap-2">{icon} {label}</div>
    </NavLink>
  );

  return (
    <aside className="hidden md:block w-full md:w-[240px] border-r border-slate-200 bg-white">
      <div className="p-3 space-y-1">

        {/* Acordeón Main Items */}
        <button
          onClick={() => setOpenMain(!openMain)}
          className="w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-700
                     hover:bg-slate-50 font-medium"
        >
          Menú Principal
          <span>{openMain ? "▲" : "▼"}</span>
        </button>
        {openMain && <div className="pl-4 space-y-1">{mainItems.map(renderNavItem)}</div>}

        {/* Acordeón Exercises */}
        <button
          onClick={() => setOpenExercises(!openExercises)}
          className="w-full text-left flex items-center justify-between rounded-lg px-3 py-2 text-slate-700 dark:text-slate-300 
                     hover:bg-slate-50 dark:hover:bg-slate-800 font-medium"
        >
          Ejercicios - Jtest
          <span>{openExercises ? "▲" : "▼"}</span>
        </button>
        {openExercises && <div className="pl-4 space-y-1">{exerciseItems.map(renderNavItem)}</div>}

      </div>
    </aside>
  );
}
