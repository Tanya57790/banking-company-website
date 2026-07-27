import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, within } from "@testing-library/react";
import Carousel from "./Carousel";
import { runToggleSectionTests } from "@/tests/helpers/runToggleSectionTests";
import userEvent from "@testing-library/user-event";

vi.mock("swiper/react", async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const actual = await vi.importActual<any>("swiper/react");
  return {
    ...actual,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Swiper: ({ children, onSlideChange, onSwiper }: any) => {
      let activeIndex = 1;

      const mockSwiper = {
        activeIndex,
        slideNext: () => {
          activeIndex += 1;
          onSlideChange?.({ activeIndex });
        },
        slidePrev: () => {
          activeIndex -= 1;
          onSlideChange?.({ activeIndex });
        },
      };

      onSwiper?.(mockSwiper);

      return (
        <div data-testid="carousel">
          <button
            type="button"
            data-testid="next-slide"
            onClick={mockSwiper.slideNext}
          >
            next
          </button>
          <button
            type="button"
            data-testid="prev-slide"
            onClick={mockSwiper.slidePrev}
          >
            prev
          </button>
          {children}
        </div>
      );
    },
    SwiperSlide: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="swiper-slide">{children}</div>
    ),
  };
});

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
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
    it("updates active slide when pressing arrows", async () => {
      const handleSlideChange = vi.fn();
      render(<Carousel onSlideChange={handleSlideChange} />);

      const user = userEvent.setup();

      await user.click(screen.getByTestId("next-slide"));
      expect(handleSlideChange).toHaveBeenCalledWith(2);
      expect(screen.getByTestId("active-slide")).toHaveTextContent(
        "Current: 2"
      );

      await user.click(screen.getByTestId("prev-slide"));
      expect(handleSlideChange).toHaveBeenCalledWith(0);
      expect(screen.getByTestId("active-slide")).toHaveTextContent(
        "Current: 0"
      );
    });

    it("arrow left and right are focusable and enabled", async () => {
      render(<Carousel />);

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
