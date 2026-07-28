import { afterEach, describe, beforeEach, it, expect } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FeaturesSection from "./FeaturesSection";

afterEach(() => {
  cleanup();
});

describe("button enabled, focusable, and text changes on click", () => {
  beforeEach(() => {
    render(<FeaturesSection />);
  });

  it("first button is focusable and enabled", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /online banking/i });

    expect(button).toBeInTheDocument();
    await user.tab();
    expect(button).toHaveFocus();
    expect(button).toBeEnabled();
  });

  it("is financial tools text", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /financial tools/i });

    expect(button).toBeInTheDocument();
    await user.click(button);

    const newText = await screen.findByText(/smart budgeting and insights/i);

    await waitFor(() => {
      expect(screen.queryByText(/account access/i)).not.toBeInTheDocument();
    });
    expect(newText).toBeInTheDocument();
  });

  it("is customer support text", async () => {
    const user = userEvent.setup();
    const button = screen.getByRole("button", { name: /customer support/i });

    expect(button).toBeInTheDocument();
    await user.click(button);

    const newText = await screen.findByText(/responsive support team/i);

    await waitFor(() => {
      expect(screen.queryByText(/account access/i)).not.toBeInTheDocument();
    });
    expect(newText).toBeInTheDocument();
  });
});
