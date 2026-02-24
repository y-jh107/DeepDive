import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";
import Child from "./components/Child";

test("send props from parent to child", () => {
  render(<App />);

  const childMessage = screen.getByTestId("child-message");
  expect(childMessage).toHaveTextContent("Hello from parent!");
});
