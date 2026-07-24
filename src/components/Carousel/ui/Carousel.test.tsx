import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import Carousel from "./Carousel";
import { runToggleSectionTests } from "@/tests/helpers/runToggleSectionTests";
import userEvent from "@testing-library/user-event";

afterEach(() => {
  cleanup();
});

describe("Carousel", () => {
  runToggleSectionTests(
    () => <Carousel />,
    /for individuals/i,
    /for businesses/i,
    /yourbank has been my trusted/i,
    /yourbank helped me set up/i
  );

  describe("arrows interactions", () => {
    beforeEach(() => {
      render(<Carousel />);
    });
    it("arrow left and right are focusable and enabled", async () => {
      const user = userEvent.setup();
      const carousel = screen.getByTestId("carousel");
      const mobileContainer = within(carousel).getByTestId("mobile-controls");

      const allButtons = within(carousel).getAllByRole("button");
      const buttonsOutsideMobile = allButtons.filter(
        (button) => !mobileContainer.contains(button)
      );

      const prevButton = buttonsOutsideMobile[0];
      const nextButton = buttonsOutsideMobile[1];

      expect(prevButton).toBeInTheDocument();
      await user.tab();
      await user.tab();
      await user.tab();
      expect(prevButton).toHaveFocus();
      expect(prevButton).toBeEnabled();

      expect(nextButton).toBeInTheDocument();
      await user.tab();
      expect(nextButton).toHaveFocus();
      expect(nextButton).toBeEnabled();
    });
  });
});
