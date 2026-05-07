"use client";

import Link from "next/link";
import { useTogglePassword, useRegisterForm } from "@/hooks";
import { InferSchema } from "@/lib/schema";
import { EyePassword } from "@/components/EyePassword";
import { AuthButtons } from "@/components/AuthButtons";
import { login } from "@/components/Menu/ui/data";
import { inputs } from "./data";

const Form = () => {
  const { isOpenEye, inputType, togglePassword } = useTogglePassword();
  const { register, reg, onSubmit } = useRegisterForm();

  return (
    <div>
      <div className="relative text-center m-auto xl:w-166 2xl:w-full z-2">
        <h1 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-primary-600 pb-2.5">
          Sign Up
        </h1>
        <p className="font-lexend font-light text-sm xl:text-[16px] text-grey-750 pb-10">
          lJoin our community today! Create an account to unlock exclusive
          features and personalized experiences.
        </p>
      </div>
      <form
        onSubmit={reg.handleSubmit(onSubmit)}
        method="POST"
        className="relative w-full lg:w-166 2xl:w-256.5 m-auto z-2"
      >
        <div className="sm:grid sm:grid-cols-[1fr_1fr] sm:gap-[30px_24px] sm:justify-items-center">
          {inputs.map((input) => {
            const fieldName = input.name as keyof InferSchema;
            const error = reg.errors[fieldName];

            return (
              <p key={input.id} className="relative flex flex-col pb-6 sm:pb-0">
                <input
                  type={input.name === "password" ? inputType : input.type}
                  {...register(`${input.name as keyof InferSchema}`)}
                  placeholder={input.placeholder}
                  autoComplete={input.autocomplete}
                  className="text-grey-350 p-4 xl:p-5 2xl:p-6 font-lexend font-light text-[16px] 2xl:text-lg lg:w-[320px] lg:h-16 2xl:w-124.5 2xl:h-18.75 bg-grey-110 rounded-[88px] focus:outline-none"
                />
                {input.name === "password" && (
                  <EyePassword onClick={togglePassword} isOpenEye={isOpenEye} />
                )}
                {error && (
                  <span className="absolute bottom-2 sm:-bottom-4 pl-4.5 text-red-500 text-[12px]">
                    {error?.message}
                  </span>
                )}
              </p>
            );
          })}
        </div>
        <div className="relative flex flex-col items-center w-full z-10">
          <div className="w-full sm:w-101 2xl:w-129.5">
            <input
              type="submit"
              className="flex justify-center items-center font-lexend text-sm 2xl:text-lg w-full h-10 sm:h-12.25 xl:w-101 xl:h-12.25 2xl:w-129.5 2xl:h-15.75 mt-6 mb-6 xl:mt-7.5 2xl:mt-10 bg-primary-600 cursor-pointer hover:bg-primary-800 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[82px]"
              value={reg.isSubmitting ? "Submitting..." : "Sign Up"}
            />
            <Link
              href={login.href}
              className="flex justify-center items-center font-lexend text-white-absolute text-sm 2xl:text-lg w-full h-10 sm:h-12.25 xl:w-101 xl:h-12.25 2xl:w-129.5 2xl:h-15.75 mb-6 bg-transparent border border-grey-200 hover:bg-grey-200/30 active:bg-grey-200 transition-all duration-200 ease-in-out rounded-[82px]"
            >
              {login.name}
            </Link>
            <AuthButtons />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
