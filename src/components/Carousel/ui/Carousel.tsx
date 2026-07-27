"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { SlideButton } from "@/components/SlideButton";
import { QuotationMark } from "@/shared/icons/QuotationMark";
import { individualsSlides, businessesSlides } from "./data";
import { breakpoints, accessibility, keyboard } from "./swiper";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";

interface SwiperToggleProps {
  isToggle?: boolean;
  onSlideChange?: (index: number) => void;
}

const Carousel = ({ onSlideChange, isToggle }: SwiperToggleProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = isToggle ? individualsSlides : businessesSlides;

  return (
    <div className="swiper-container">
      <span data-testid="active-slide" className="hidden">
        Current: {activeIndex}
      </span>
      <Swiper
        data-testid="carousel"
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          onSlideChange?.(swiper.activeIndex);
        }}
        modules={[A11y, Navigation]}
        breakpoints={breakpoints}
        keyboard={keyboard}
        a11y={accessibility}
        centeredSlides={true}
        centeredSlidesBounds={true}
        className="mt-10 pb-7.5 md:pb-0 md:mt-20 2xl:mt-25"
      >
        <SlideButton variantButton="prev" variantTestId="desktop" isDesktop />
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-secondary-105 to-secondary-105/20"></div>
          <div className="absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-secondary-105 to-secondary-105/20"></div>
        </div>
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="flex! justify-center! cursor-pointer"
          >
            <div className="relative flex flex-col items-center w-89.5 h-auto md:w-81.25 2xl:w-101 overflow-hidden">
              <QuotationMark />
              <p className="font-lexend font-normal text-center text-white-absolute text-sm xl:text-[16px] 2xl:text-lg pt-3">
                {slide.text}
              </p>
              <p className="font-lexend text-primary-600 text-sm xl:text-[16px] 2xl:text-lg pt-7.5 pb-5 md:pt-10 md:pb-0 2xl:pt-12.5">
                {slide.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
        <SlideButton variantButton="next" variantTestId="desktop" isDesktop />
        <div
          data-testid="mobile-controls"
          className="flex md:hidden justify-center w-full"
        >
          <div className="flex relative justify-between h-11 w-31 xl:h-15.5 sm:w-37 xl:w-40 mt-6.5 sm:mt-7.5">
            <SlideButton variantButton="prev" variantTestId="mobile" />
            <SlideButton variantButton="next" variantTestId="mobile" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
