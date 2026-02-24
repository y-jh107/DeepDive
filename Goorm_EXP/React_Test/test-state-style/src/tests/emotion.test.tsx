import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import EmotionBox from "../components/EmotionBox";

test("EmotionBox component should render lightcoral box", () => {
  render(<EmotionBox />);

  const box = screen.getByText("Emotion Box");
  const styles = getComputedStyle(box);

  expect(styles.backgroundColor).toBe("rgb(240, 128, 128)");
});
