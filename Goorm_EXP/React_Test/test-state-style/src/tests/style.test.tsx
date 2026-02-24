import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import StyledBox from "../components/StyledBox";

test("StyledBox component should render lightblue box", () => {
  render(<StyledBox />);

  const box = screen.getByText("Styled Box");
  const styles = getComputedStyle(box);

  expect(styles.backgroundColor).toBe("rgb(173, 216, 230)");
});
