import { render, screen, fireEvent, act } from "@testing-library/react";
import CountdownTimer from "./CountdownTimer";

jest.useFakeTimers();

describe("CountdownTimer Component", () => {
  test("muestra el tiempo inicial correctamente", () => {
    render(<CountdownTimer />);

    const input = screen.getByPlaceholderText("Ingrese segundos");
    const display = screen.getByText("0");

    expect(input).toBeInTheDocument();
    expect(display).toBeInTheDocument();
  });

  test("disminuye en intervalos de un segundo", () => {
    render(<CountdownTimer />);

    const input = screen.getByPlaceholderText("Ingrese segundos");
    const button = screen.getByRole("button", { name: /Iniciar/i });

    fireEvent.change(input, { target: { value: "5" } });
    fireEvent.click(button);

    expect(screen.getByText("5")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("4")).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("se detiene en 0", () => {
    render(<CountdownTimer />);

    const input = screen.getByPlaceholderText("Ingrese segundos");
    const button = screen.getByRole("button", { name: /Iniciar/i });

    fireEvent.change(input, { target: { value: "2" } });
    fireEvent.click(button);

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByText("0")).toBeInTheDocument();
  });

  test("no inicia con valores inválidos", () => {
    render(<CountdownTimer />);

    const button = screen.getByRole("button", { name: /Iniciar/i });

    // Sin valor
    expect(button).toBeDisabled();

    // Valor cero
    const input = screen.getByPlaceholderText("Ingrese segundos");
    fireEvent.change(input, { target: { value: "0" } });
    expect(button).toBeDisabled();

    // Valor negativo
    fireEvent.change(input, { target: { value: "-5" } });
    expect(button).toBeDisabled();
  });

  test("botón se deshabilita durante la cuenta regresiva", () => {
    render(<CountdownTimer />);

    const input = screen.getByPlaceholderText("Ingrese segundos");
    const button = screen.getByRole("button", { name: /Iniciar/i });

    fireEvent.change(input, { target: { value: "3" } });
    fireEvent.click(button);

    expect(button).toBeDisabled();

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(button).not.toBeDisabled();
  });
});