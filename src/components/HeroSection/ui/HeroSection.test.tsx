import { describe, expect, it, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeroSection from "./HeroSection";

afterEach(() => {
  cleanup();
});

describe("HeroSection", () => {
  it("cta link is focusable and has correct margin classes", async () => {
    render(<HeroSection />);

    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: /open account/i });

    expect(link).toBeInTheDocument();
    await user.tab();
    expect(link).toHaveFocus();
    expect(link).toHaveClass("mb-20", "md:mb-0");
  });
});
