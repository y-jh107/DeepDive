import App from "./App";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";

test("Add new todo item", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByPlaceholderText("새로운 Todo...");
  const addButton = screen.getByRole("button", { name: "추가" });

  await user.type(input, "새로운 todo");
  await user.click(addButton);

  const todoItem = screen.getByText("새로운 todo");
  expect(todoItem).toBeInTheDocument();
});

test("Toggle todo item completion", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByPlaceholderText("새로운 Todo...");
  const addButton = screen.getByRole("button", { name: "추가" });

  await user.type(input, "완료할 todo");
  await user.click(addButton);

  const todoText = screen.getByText("완료할 todo");
  expect(todoText).toBeInTheDocument();

  const todoItem = todoText.closest(".TodoItem");
  const todoCheckbox = within(todoItem).getByRole("checkbox");
  await user.click(todoCheckbox);

  expect(todoText).toHaveClass("clear");
});

test("Delete todo item", async () => {
  const user = userEvent.setup();
  render(<App />);

  const input = screen.getByPlaceholderText("새로운 Todo...");
  const addButton = screen.getByRole("button", { name: "추가" });

  await user.type(input, "삭제할 todo");
  await user.click(addButton);

  const todoText = screen.getByText("삭제할 todo");
  expect(todoText).toBeInTheDocument();

  const todoItem = todoText.closest(".TodoItem");
  const deleteButton = within(todoItem).getByRole("button", { name: "삭제" });
  await user.click(deleteButton);

  expect(todoText).not.toBeInTheDocument();
});
