import { render, screen } from "@testing-library/react";
import Type from "../Type";
import { userEvent } from "@testing-library/user-event";

test("update product's total when products change", async () => {
  render(<Type orderType="products" />);

  const productsTotal = screen.getByText("상품 총 가격:", { exact: false });
  expect(productsTotal).toHaveTextContent("0");

  // America 여행 상품 한 개 올리기
  const americaInput = await screen.findByRole("spinbutton", {
    name: "America",
  });
  userEvent.clear();
  userEvent.type(americaInput, "1");
  expect(productsTotal).toHaveTextContent("1000");
});
