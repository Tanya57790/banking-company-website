"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation } from "swiper/modules";
import { SlideButton } from "@/components/SlideButton";
import { QuotationMark } from "@/components/QuotationMark";
import { individualsSlides, businessesSlides } from "./data";
import { breakpoints, accessibility, keyboard } from "./swiper";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";

const Carousel = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const slides = isToggle ? individualsSlides : businessesSlides;

  return (
    <div className="my-20 md:my-30 2xl:my-37.5">
      <div className="flex flex-col items-center justify-center md:items-end md:justify-between md:flex-row">
        <div className="text-center md:text-left pb-5 md:pb-0 lg:w-153.25 xl:w-205.25">
          <h1 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-white-absolute pb-2.5">
            Our <span className="text-primary-600">Testimonials</span>
          </h1>
          <p className="font-light font-lexend text-sm xl:text-[16px] 2xl:text-lg text-grey-750">
            Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus
            pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus.
            Nascetur viverra arcu sed amet cursus purus.
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-0.5 p-3 mb-10 md:p-3.5 md:mb-0 w-74.75 h-16.25 2xl:w-96.5 2xl:h-20.75 bg-grey-150 rounded-[82px]">
          <button
            onClick={() => setIsToggle(true)}
            className={`cursor-pointer font-lexend text-sm 2xl:text-lg w-34.75 h-10.25 2xl:w-45.25 2xl:h-13.75 rounded-[140px] transition-all duration-200 ease-in-out ${
              isToggle
                ? "bg-primary-600 text-grey-110"
                : "bg-transparent text-white-absolute"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => setIsToggle(false)}
            className={`cursor-pointer font-lexend text-sm 2xl:text-lg w-34.75 h-10.25 2xl:w-45.25 2xl:h-13.75 rounded-[140px] transition-all duration-200 ease-in-out ${
              isToggle
                ? "bg-transparent text-white-absolute"
                : "bg-primary-600 text-grey-110"
            }`}
          >
            For Businesses
          </button>
        </div>
      </div>
      <div className="swiper-container">
        <Swiper
          modules={[A11y, Navigation]}
          breakpoints={breakpoints}
          keyboard={keyboard}
          a11y={accessibility}
          centeredSlides={true}
          centeredSlidesBounds={true}
          className="mt-10 pb-7.5 md:pb-0 md:mt-20 2xl:mt-25"
        >
          <SlideButton variantButton="prev" isDesktop />
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
          <SlideButton variantButton="next" isDesktop />
          <div className="flex md:hidden justify-center w-full">
            <div className="flex relative justify-between h-11 w-31 xl:h-15.5 sm:w-37 xl:w-40 mt-6.5 sm:mt-7.5">
              <SlideButton variantButton="prev" />
              <SlideButton variantButton="next" />
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
