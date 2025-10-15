import { useState } from "react";

export default function PasswordValidator() {
  const [password, setPassword] = useState("");

  // Funciones de validación
  const rules = [
    {
      label: "Al menos 8 caracteres",
      test: (pwd: string) => pwd.length >= 8,
    },
    {
      label: "Contiene un número",
      test: (pwd: string) => /\d/.test(pwd),
    },
    {
      label: "Contiene una letra mayúscula",
      test: (pwd: string) => /[A-Z]/.test(pwd),
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8">

      <div className="space-y-6">
        <label className="block">
          <span className="block text-sm font-medium text-slate-700 mb-2">Ingrese una contraseña:</span>
          <input
            type="password"
            className="w-full border border-slate-300 rounded-lg p-3 focus:ring-2 focus:ring-red-500 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Escriba su contraseña"
          />
        </label>

        <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border border-slate-200">
          <h2 className="text-lg font-semibold mb-4 text-slate-800">Requisitos:</h2>
          <ul className="space-y-3">
            {rules.map((rule, index) => {
              const valid = rule.test(password);
              return (
                <li
                  key={index}
                  className={`flex items-center gap-3 p-2 rounded-lg ${
                    valid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                  }`}
                >
                  <span className="text-lg">{valid ? "✅" : "❌"}</span>
                  <span className="font-medium">{rule.label}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
