import { render } from "@testing-library/react";
import App from "./App";

test("renderiza la aplicación sin errores", () => {
  expect(() => {
    render(<App />);
  }).not.toThrow();
});
