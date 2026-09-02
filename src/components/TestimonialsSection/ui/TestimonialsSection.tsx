"use client";

import { useState } from "react";
import { Carousel } from "@/components/Carousel";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";

const TestimonialsSection = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);

  return (
    <div className="mt-20 md:mt-30 2xl:mt-37.5">
      <div className="flex flex-col items-center justify-center md:items-end md:justify-between md:flex-row">
        <div className="text-center md:text-left pb-5 md:pb-0 lg:w-153.25 xl:w-205.25">
          <h2 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-white-absolute pb-2.5">
            Our <span className="text-primary-600">Testimonials</span>
          </h2>
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
      <Carousel isToggle={isToggle} />
    </div>
  );
};

export default TestimonialsSection;
