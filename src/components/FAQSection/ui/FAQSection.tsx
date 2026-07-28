"use client";

import { useState } from "react";
import { ArrowBottomIcon } from "@/shared/icons/ArrowBottomIcon";
import { questions } from "./data";

const FAQSection = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <div className="m-auto w-[288px] xs:w-89.5 lg:w-226.5 xl:w-278.5 2xl:w-301.5 desktop:w-[1590px] md:w-155 mt-[69.37px] md:mt-[120.73px] 2xl:mt-[150.52px]">
      <div className="relative flex flex-col items-center justify-center lg:items-start lg:pr-1.5">
        <section className="text-center lg:text-left pb-5">
          <h2 className="font-lexend font-medium text-[28px] xl:text-[38px] 2xl:text-[48px] text-white-absolute pb-2.5 2xl:pb-3.5">
            <span className="text-primary-600">Frequently</span> Asked Questions
          </h2>
          <p className="font-light font-lexend text-sm xl:text-[16px] 2xl:text-lg text-grey-750">
            Still you have any questions? Contact our Team via
            support@yourbank.com
          </p>
        </section>
        <div
          className={`relative grid overflow-hidden transition-[max-height] duration-1000 ease-in-out
            ${
              isShow
                ? "max-h-[3234px] xs:max-h-[2768px] md:max-h-[1686px] lg:max-h-321 xl:max-h-343.5 2xl:max-h-[1780px]"
                : "max-h-[1601px] xs:max-h-326.25 md:max-h-205.25 lg:max-h-158 xl:max-h-174 2xl:max-h-219 desktop:max-h-166.75"
            } w-full mt-12.5 md:grid-cols-2 md:mt-5 md:gap-3 lg:mt-0 lg:gap-5 xl:mt-15 2xl:mt-20 2xl:gap-7.5`}
        >
          {questions.map((question) => (
            <section key={question.id} className="p-7.5 xl:p-10 2xl:p-12.5">
              <h3 className="font-lexend font-medium text-lg text-white-absolute pb-2.5 2xl:text-[22px]">
                {question.title}
              </h3>
              <p className="font-light font-lexend pt-5 text-sm text-grey-750 xl:text-[16px] 2xl:text-lg">
                {question.text}
              </p>
            </section>
          ))}
        </div>
        {!isShow && (
          <div className="absolute bottom-0 w-full h-75 xs:h-55 md:h-70 lg:h-55 xl:h-57.5 2xl:h-77.5 desktop:h-50 pointer-events-none z-10">
            <div className="absolute w-full h-full inset-x-0 bottom-0 bg-linear-to-t from-secondary-105 to-secondary-105/20" />
          </div>
        )}
      </div>
      <div className="relative flex justify-center w-full">
        <button
          type="button"
          aria-expanded={isShow}
          onClick={() => setIsShow((prev) => !prev)}
          className="cursor-pointer flex items-center justify-center font-inter text-white-absolute text-sm bg-grey-110 rounded-[100px] w-38.75 h-12.25 2xl:text-lg 2xl:w-48.25 2xl:h-15.75"
        >
          {isShow ? "Hide FAQ’s" : "Load All FAQ’s"}
          <div
            className={`flex items-center justify-center ${
              isShow ? "rotate-180" : "rotate-0"
            } ml-[8.5px] 2xl:ml-[9.5px]`}
          >
            <ArrowBottomIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default FAQSection;
