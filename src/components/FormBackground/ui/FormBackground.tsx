"use client";

import Image from "next/image";
import abstractImage from "@/assets/images/abstract-register_d.png";
import bgImage from "@/assets/images/form-background.webp";

const FormBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col w-full items-center ">
      <div className="relative my-7.5 p-7.5 xl:py-12.5 xl:px-18.75 2xl:py-25 2xl:px-37.5 sm:w-147.5 lg:w-228 2xl:w-331.5 border border-grey-150 bg-grey-110 rounded-2xl">
        <div className="absolute inset-0 bg-grey-110/90 shadow-md z-1 rounded-2xl" />
        <Image
          src={bgImage}
          width={1060}
          height={706}
          sizes="100vw"
          priority
          className="absolute right-0 h-full w-full object-cover opacity-60 -my-7.5 xl:-my-12.5 2xl:-my-25 rounded-2xl"
          alt="Background image"
        />
        <Image
          src={abstractImage}
          width={325}
          height={342}
          sizes="167px"
          priority
          className="absolute right-0 z-1 -my-7.5 xl:-my-12.5 2xl:-my-25 w-41.75 md:w-40.75 lg:w-51.25 xl:w-[256px] 2xl:w-85.5 mask-l-from-70% mask-l-to-90% mask-b-from-50% mask-b-to-90% mask-radial-at-bottom-left mask-radial-from-70% mask-radial-to-100%"
          alt="Abstract green image"
        />
        {children}
      </div>
    </div>
  );
};

export default FormBackground;
