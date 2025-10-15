import { render, screen, act } from "@testing-library/react";
import { DigitalClock } from "../components/DigitalClock";

jest.useFakeTimers();
jest.spyOn(global, "setInterval");

describe("DigitalClock Component", () => {
  test("muestra la hora en formato HH:MM:SS", () => {
    render(<DigitalClock />);
    const timeText = screen.getByText(/\d{2}:\d{2}:\d{2}/);
    expect(timeText).toBeInTheDocument();
  });

  test("avanza correctamente con el tiempo simulado", () => {
    render(<DigitalClock />);
    const initialTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;

    // Simula un segundo
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const updatedTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent;
    expect(updatedTime).not.toBe(initialTime);
  });
});
