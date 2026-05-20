"use client";

import { useSwiper } from "swiper/react";
import { arrowLeft, arrowRight } from "./data";

type VariantButton = "prev" | "next";

interface SlideButtonProps {
  variantButton: VariantButton;
  isDesktop?: boolean;
}

const SlideButton = ({ variantButton, isDesktop }: SlideButtonProps) => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      aria-label={variantButton === "prev" ? "Previous slide" : "Next slide"}
      onClick={() =>
        variantButton === "prev" ? swiper.slidePrev() : swiper.slideNext()
      }
      className={`${
        variantButton === "prev" ? "swiper-button-prev" : "swiper-button-next"
      } absolute cursor-pointer ${
        isDesktop ? "hidden! md:flex!" : "flex"
      } text-transparent! justify-center items-center px-2.75 py-3.75
      w-13 h-13 xl:w-15.5 xl:h-15.5 bg-grey-150 rounded-[100px] z-20! transition-all duration-200 ease-in-out`}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-primary-600 active:stroke-primary-700 w-3.75 h-3.5 xl:w-4.5 xl:h-4.25"
      >
        <path
          d={variantButton === "prev" ? arrowLeft : arrowRight}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default SlideButton;
