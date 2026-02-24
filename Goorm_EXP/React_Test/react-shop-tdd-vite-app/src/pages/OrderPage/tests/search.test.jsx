import { render, screen } from "../../../test-utils";
import { test } from "vitest";
import OrderPage from "../OrderPage";
import userEvent from "@testing-library/user-event";

test("search test", async () => {
  const user = userEvent.setup();
  render(<OrderPage />);

  const searchInput = screen.getByPlaceholderText("상품 검색");
  await user.type(searchInput, "america");

  const searchResult = await screen.findByText("America");
  expect(searchResult).toBeInTheDocument();
  expect(screen.queryByText("England")).not.toBeInTheDocument();
});
