import { render, screen, fireEvent } from "@testing-library/react";
import ColorPicker from "./ColorPicker";

describe("ColorPicker Component", () => {
  beforeEach(() => {
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
  });

  test("el color inicial es blanco", () => {
    render(<ColorPicker />);

    const colorInput = screen.getByDisplayValue("#ffffff");
    expect(colorInput).toBeInTheDocument();

    const colorDisplay = screen.getByText("#FFFFFF");
    expect(colorDisplay).toBeInTheDocument();
  });

  test("al seleccionar un nuevo color, el div se actualiza", () => {
    render(<ColorPicker />);

    const colorInput = screen.getByDisplayValue("#ffffff");
    fireEvent.change(colorInput, { target: { value: "#ff0000" } });

    const colorDisplay = screen.getByText("#FF0000");
    expect(colorDisplay).toBeInTheDocument();
  });

  test("persistencia en localStorage", () => {
    // Simular color guardado
    localStorage.setItem("selected-color", "#00ff00");

    render(<ColorPicker />);

    const colorInput = screen.getByDisplayValue("#00ff00");
    expect(colorInput).toBeInTheDocument();

    const colorDisplay = screen.getByText("#00FF00");
    expect(colorDisplay).toBeInTheDocument();

    // Cambiar color y verificar que se guarda
    fireEvent.change(colorInput, { target: { value: "#0000ff" } });
    expect(localStorage.getItem("selected-color")).toBe("#0000ff");
  });
});