"use client";

import { AuthButton } from "@/components/AuthButton";

const AuthButtons = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <hr className="text-grey-700 w-full" />
        <span className="text-grey-700 text-sm 2xl:text-lg text-center whitespace-nowrap w-full px-4">
          Or Continue with
        </span>
        <hr className="text-grey-700 w-full" />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex justify-between pt-6 2xl:pt-7.5 w-61 2xl:w-[320px]">
          <AuthButton provider="google" />
          <AuthButton provider="facebook" />
          <AuthButton provider="apple" />
        </div>
      </div>
    </div>
  );
};

export default AuthButtons;
