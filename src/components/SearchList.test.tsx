import { render, screen, fireEvent } from "@testing-library/react";
import SearchList from "./SearchList";

describe("SearchList Component", () => {
  test("lista inicial muestra todos los elementos", () => {
    render(<SearchList />);

    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.getByText("Beatriz")).toBeInTheDocument();
    expect(screen.getByText("David")).toBeInTheDocument();
    expect(screen.getByText("Elena")).toBeInTheDocument();
  });

  test("al escribir, se filtran los nombres que coincidan", () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText("Escribe para buscar...");

    fireEvent.change(input, { target: { value: "a" } });

    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.getByText("Carlos")).toBeInTheDocument();
    expect(screen.getByText("Beatriz")).toBeInTheDocument();
    expect(screen.getByText("Gabriela")).toBeInTheDocument();

    // David contiene "a" pero en minúscula, debería aparecer
    expect(screen.getByText("David")).toBeInTheDocument();
    expect(screen.getByText("Elena")).toBeInTheDocument();
    expect(screen.getByText("Fernando")).toBeInTheDocument();
  });

  test("filtrado es case insensitive", () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText("Escribe para buscar...");

    fireEvent.change(input, { target: { value: "ANA" } });

    expect(screen.getByText("Ana")).toBeInTheDocument();
    expect(screen.queryByText("Carlos")).not.toBeInTheDocument();
  });

  test("si no hay coincidencias, se muestra 'No encontrado'", () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText("Escribe para buscar...");

    fireEvent.change(input, { target: { value: "xyz" } });

    expect(screen.getByText("No encontrado")).toBeInTheDocument();
    expect(screen.queryByText("Ana")).not.toBeInTheDocument();
  });

  test("búsqueda parcial funciona", () => {
    render(<SearchList />);

    const input = screen.getByPlaceholderText("Escribe para buscar...");

    fireEvent.change(input, { target: { value: "el" } });

    expect(screen.getByText("Elena")).toBeInTheDocument();
    expect(screen.queryByText("Carlos")).not.toBeInTheDocument();
  });
});