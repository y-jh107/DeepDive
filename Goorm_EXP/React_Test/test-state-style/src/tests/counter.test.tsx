import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../components/Counter";

test("Increase count when button is clicked", async () => {
  const user = userEvent.setup();
  render(<Counter />);

  const button = screen.getByRole("button", { name: "증가" });
  const counterValue = screen.getByTestId("counter-value");

  await user.click(button);
  expect(counterValue).toHaveTextContent("1");
});
