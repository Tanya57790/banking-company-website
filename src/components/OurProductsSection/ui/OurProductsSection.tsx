"use client";
import { useState } from "react";
import { ProductIcon } from "@/shared/icons/ProductIcon";
import { individuals, businesses } from "./data";

const OurProducts = () => {
  const [isToggle, setIsToggle] = useState<boolean>(true);
  const products = isToggle ? individuals : businesses;

  return (
    <div className="m-auto xs:w-89.5 sm:w-141 md:w-155 lg:w-auto mt-[69.37px] md:mt-[120.73px] 2xl:mt-[150.52px]">
      <div className="flex flex-col items-center justify-center lg:items-end lg:justify-between lg:flex-row lg:pr-1.5">
        <div className="text-center lg:text-left pb-5 lg:pb-0 lg:w-153.25 xl:w-205.25">
          <h1 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-white-absolute pb-2.5">
            Our <span className="text-primary-600">Products</span>
          </h1>
          <p className="font-light font-lexend text-sm xl:text-[16px] 2xl:text-lg text-grey-750">
            Discover a range of comprehensive and customizable banking products
            at YourBank, designed to suit your unique financial needs and
            aspirations
          </p>
        </div>
        <div className="flex items-center justify-center gap-x-0.5 p-3 md:p-3.5 w-74.75 h-16.25 2xl:w-96.5 2xl:h-20.75 bg-grey-150 rounded-[82px]">
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
      <div className="relative grid items-center lg:grid-cols-3 xl:gap-20 2xl:gap-10 desktop:gap-30">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center mt-15 md:mt-20 2xl:mt-25 "
          >
            <div className="flex justify-center items-center h-17 w-17 2xl:h-23.5 2xl:w-23.5 rounded-[50px] bg-linear-to-b from-primary-600/10 via-primary-600/5 to-transparent mask-b-from-80% mask-b-to-100%">
              <div className="flex justify-center items-center h-13 w-13 2xl:h-17.5 2xl:w-17.5 border border-primary-600/5 rounded-[50px] bg-linear-to-b from-primary-600/10 via-primary-600/5 to-transparent mask-b-from-65% mask-b-to-100% transition-all duration-200 ease-in-out">
                <ProductIcon variant={product.icon} />
              </div>
            </div>
            <h2 className="font-lexend text-center text-white-absolute text-[20px] 2xl:text-[24px] pt-5 md:pt-6 2xl:pt-7.5">
              {product.title}
            </h2>
            <p className="font-lexend font-light text-center text-grey-750 text-sm xl:text-[16px] desktop:text-lg pt-3 md:pt-4 2xl:pt-5">
              {product.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
