import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroSection from "./HeroSection";

test("cta link is focusable and has correct href and margin classes", async () => {
  render(<HeroSection />);
  const user = userEvent.setup();
  const link = screen.getByRole("link", { name: /open account/i });

  expect(link).toBeInTheDocument();
  await user.tab();
  expect(link).toHaveFocus();
  expect(link).toHaveAttribute("href", "#");
  expect(link).toHaveClass("mb-20", "md:mb-0");
});
