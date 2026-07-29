import { afterEach, describe, beforeEach, it, expect } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FAQSection from "./FAQSection";

afterEach(() => {
  cleanup();
});

describe("FAQ interactions", () => {
  beforeEach(() => {
    render(<FAQSection />);
  });

  it("button enabled and focusable", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /load all faq’s/i });

    expect(button).toBeInTheDocument();
    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toBeEnabled();
  });

  it("toggles FAQ’s visibility on click", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /load all faq’s/i });

    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");

    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
