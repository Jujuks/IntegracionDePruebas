import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks((prev) => [...prev, newTask.trim()]);
    setNewTask("");
  };

  const handleDeleteTask = (index: number) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Nueva tarea"
          className="flex-1 border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
        <button
          onClick={handleAddTask}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
        >
          Agregar
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border border-slate-200 shadow-sm"
          >
            <span className="font-medium text-slate-700">{task}</span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Eliminar
            </button>
          </li>
        ))}
        {tasks.length === 0 && (
          <div className="text-center py-8 text-slate-500">
            <p>No hay tareas pendientes</p>
          </div>
        )}
      </ul>
    </div>
  );
}
