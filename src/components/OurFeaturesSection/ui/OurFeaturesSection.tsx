"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { ArrowTopIcon } from "@/shared/icons/ArrowTopIcon";
import { onlineBanking, financialTools, customerSupport } from "./data";
import { breakpoints, accessibility, keyboard, slides } from "./swiper";

type ActiveTab = "onlineBanking" | "financialTools" | "customerSupport";

const OurFeaturesSection = () => {
  const [active, setActive] = useState<ActiveTab>("onlineBanking");

  const features =
    active === "onlineBanking"
      ? onlineBanking
      : active === "financialTools"
      ? financialTools
      : active === "customerSupport"
      ? customerSupport
      : [];

  return (
    <div className="mt-20 lg:mt-30 2xl:mt-37.5">
      <div className="text-center pb-5 lg:text-left lg:pb-0 lg:w-153.25 xl:w-255.25 desktop:w-315.25">
        <h2 className="font-lexend font-medium text-white-absolute pb-2.5 text-[28px] xl:text-[38px] 2xl:text-[48px]">
          Our <span className="text-primary-600">Features</span>
        </h2>
        <p className="font-light font-lexend text-grey-750 text-sm xl:text-[16px] 2xl:text-lg">
          Experience a host of powerful features at YourBank, including seamless
          online banking, secure transactions, and personalized financial
          insights, all designed to enhance your banking experience
        </p>
      </div>
      <div className="swiper-container flex flex-col xs:items-center lg:items-start lg:flex-row lg:mt-15">
        <Swiper
          modules={[A11y]}
          slidesPerView="auto"
          breakpoints={breakpoints}
          keyboard={keyboard}
          a11y={accessibility}
          wrapperClass="flex items-center w-min sm:gap-5 lg:w-auto lg:flex-col lg:justify-center lg:transform-none! 2xl:gap-7.5 2xl:w-52"
          className="swiper overflow-hidden mt-12.5 w-full h-22.25 p-4 bg-grey-110 rounded-[10px] xs:p-5 sm:w-max md:overflow-visible lg:w-61.25 lg:h-auto lg:p-10 lg:mt-0 lg:mr-5 2xl:mr-7.5 2xl:p-12.5 2xl:w-77"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <button
                type="button"
                onClick={() => setActive(`${slide.active}`)}
                className={`${slide.style} ${
                  active === `${slide.active}`
                    ? "bg-grey-100 text-primary-600"
                    : "shadow-[0px_0px_0px_1px_rgba(25,25,25,0.75)] text-white-absolute"
                }`}
              >
                {slide.text}
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="grid xs:w-89.5 sm:w-132.25 md:grid-cols-2 md:mt-5 md:w-157.5 md:gap-3 lg:w-full lg:mt-0 lg:gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="grid grid-cols-[1fr_max-content] bg-grey-110 w-full h-auto p-5 mt-5 rounded-[10px] xs:p-7.5 md:mt-0 lg:p-10 2xl:p-12.5"
            >
              <section>
                <h3 className="font-lexend font-medium text-lg text-white-absolute pb-2.5 2xl:text-[22px]">
                  {feature.title}
                </h3>
                <p className="font-light font-lexend pt-5 text-sm text-grey-750 xl:text-[16px] 2xl:text-lg">
                  {feature.text}
                </p>
              </section>
              <ArrowTopIcon />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeaturesSection;
