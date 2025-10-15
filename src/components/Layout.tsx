import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Contenido dinámico (cada vista) */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-slate-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
