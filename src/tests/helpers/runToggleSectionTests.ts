import type { JSX } from "react";
import { describe, beforeEach, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export function runToggleSectionTests(
  renderComponent: () => JSX.Element,
  firstButtonName: string | RegExp,
  secondButtonName: string | RegExp,
  firstText: string | RegExp,
  secondText: string | RegExp
) {
  describe("toggle interactions", () => {
    beforeEach(() => {
      render(renderComponent());
    });

    it("first button is focusable and enabled", async () => {
      const user = userEvent.setup();
      const button = screen.getByRole("button", { name: firstButtonName });

      expect(button).toBeInTheDocument();
      await user.tab();
      expect(button).toHaveFocus();
      expect(button).toBeEnabled();
    });

    it("second button is focusable and enabled", async () => {
      const user = userEvent.setup();
      const button = screen.getByRole("button", { name: secondButtonName });

      expect(button).toBeInTheDocument();
      await user.tab();
      await user.tab();
      expect(button).toHaveFocus();
      expect(button).toBeEnabled();
    });

    it("shows second text when second button is clicked", async () => {
      const user = userEvent.setup();
      const button = screen.getByRole("button", { name: secondButtonName });

      await user.click(button);

      const newText = await screen.findByText(secondText);
      await waitFor(() => {
        expect(screen.queryByText(firstText)).not.toBeInTheDocument();
      });
      expect(newText).toBeInTheDocument();
    });

    it("shows first text when first button is clicked after second button", async () => {
      const user = userEvent.setup();
      const individualsButton = screen.getByRole("button", {
        name: firstButtonName,
      });
      const businesessButton = screen.getByRole("button", {
        name: secondButtonName,
      });

      await user.click(businesessButton);
      const newBusinesessText = await screen.findByText(secondText);
      await waitFor(() => {
        expect(screen.queryByText(firstText)).not.toBeInTheDocument();
      });
      expect(newBusinesessText).toBeInTheDocument();

      await user.click(individualsButton);
      const newIndividualsText = await screen.findByText(firstText);
      await waitFor(() => {
        expect(screen.queryByText(secondText)).not.toBeInTheDocument();
      });
      expect(newIndividualsText).toBeInTheDocument();
    });
  });
}
