// src/components/Navbar.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

// Limpia los mocks antes de cada prueba
beforeEach(() => {
  jest.clearAllMocks();
  // Mock localStorage
  let store: Record<string, string> = {};
  const localStorageMock = {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    },
  };
  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  // Mock document.documentElement.classList
  const classListMock = {
    contains: jest.fn(),
    add: jest.fn(),
    remove: jest.fn(),
    toggle: jest.fn(),
  };
  Object.defineProperty(document.documentElement, "classList", {
    value: classListMock,
    writable: true,
  });

  // Mock matchMedia
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

// --- Pruebas de renderizado ---
describe("Navbar - Renderizado", () => {
  test("renderiza el título principal 'UCC : Prácticas Desarrollo'", () => {
    render(<Navbar />);
    expect(screen.getByText(/UCC : Prácticas Desarrollo/i)).toBeInTheDocument();
  });

  test("renderiza el botón con el texto 'Tema'", () => {
    render(<Navbar />);
    expect(screen.getByRole("button", { name: /Tema/i })).toBeInTheDocument();
  });

  test("cambia el tema al hacer clic en el botón", () => {
    const mockToggle = jest.fn();
    document.documentElement.classList.toggle = mockToggle;
    mockToggle.mockReturnValue(true); // Primera llamada retorna true (agrega 'dark')
    mockToggle.mockReturnValueOnce(false); // Segunda llamada retorna false (remueve 'dark')

    render(<Navbar />);
    const button = screen.getByRole("button", { name: /Tema/i });

    // Hacer clic en el botón
    fireEvent.click(button);

    // Verificar que toggle fue llamado con 'dark'
    expect(mockToggle).toHaveBeenCalledWith("dark");
  });

  test("persiste el tema en localStorage", () => {
    const mockToggle = jest.fn();
    document.documentElement.classList.toggle = mockToggle;
    mockToggle.mockReturnValue(true); // Primera llamada retorna true (agrega 'dark')

    render(<Navbar />);
    const button = screen.getByRole("button", { name: /Tema/i });

    // Hacer clic para cambiar a dark
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("dark");

    // Configurar para segunda llamada
    mockToggle.mockReturnValue(false); // Segunda llamada retorna false (remueve 'dark')

    // Hacer clic nuevamente para cambiar a light
    fireEvent.click(button);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  test("inicializa el tema desde localStorage", () => {
    localStorage.setItem("theme", "dark");
    const mockToggle = jest.fn();
    document.documentElement.classList.toggle = mockToggle;

    render(<Navbar />);

    // Verificar que se llamó toggle con 'dark' y true
    expect(mockToggle).toHaveBeenCalledWith("dark", true);
  });

  test("inicializa el tema con preferencia del sistema si no hay localStorage", () => {
    // Mock matchMedia para que retorne true (prefiere dark)
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: true, // Simula preferencia por tema oscuro
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const mockAdd = jest.fn();
    document.documentElement.classList.add = mockAdd;

    render(<Navbar />);

    // Verificar que se agregó la clase 'dark'
    expect(mockAdd).toHaveBeenCalledWith("dark");
  });
});
