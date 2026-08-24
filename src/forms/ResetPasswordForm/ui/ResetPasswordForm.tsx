"use client";

import { useTogglePassword, useResetPasswordForm } from "@/hooks";
import { EyePassword } from "@/components/EyePassword";

const ResetPasswordForm = () => {
  const {
    register,
    errors,
    isSubmitting,
    handleSubmit,
    onSubmitResetPassword,
  } = useResetPasswordForm();

  const passwordToggle = useTogglePassword();
  const confirmPasswordToggle = useTogglePassword();

  return (
    <div>
      <div className="relative text-center m-auto xl:w-166 2xl:w-full z-2">
        <h1 className="font-lexend font-medium text-[28px] 2xl:text-[38px] text-primary-600 pb-2.5">
          Reset Password
        </h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmitResetPassword)}
        className="relative w-full lg:w-166 2xl:w-256.5 m-auto z-2"
      >
        <div className="grid gap-[30px_24px] justify-items-center lg:grid-cols-[1fr_1fr]">
          <p className="relative flex flex-col">
            <input
              type={passwordToggle.inputType}
              {...register("password")}
              placeholder="New password"
              className="text-grey-350 p-4 pr-16.25 xl:p-5 2xl:p-6 font-lexend font-light text-[16px] w-auto sm:w-100 2xl:text-lg lg:w-[320px] lg:h-16 2xl:w-124.5 2xl:h-18.75 bg-grey-110 rounded-[88px] focus:outline-none"
            />
            <EyePassword
              onClick={passwordToggle.togglePassword}
              isOpenEye={passwordToggle.isOpenEye}
            />
            {errors.password && (
              <span className="absolute bottom-2 sm:-bottom-4 pl-4.5 text-red-500 text-[12px]">
                {errors.password?.message}
              </span>
            )}
          </p>
          <p className="relative flex flex-col">
            <input
              type={confirmPasswordToggle.inputType}
              {...register("confirmPassword")}
              placeholder="Confirm new password"
              className="text-grey-350 p-4 pr-16.25 xl:p-5 2xl:p-6 font-lexend font-light text-[16px] w-auto sm:w-100 2xl:text-lg lg:w-[320px] lg:h-16 2xl:w-124.5 2xl:h-18.75 bg-grey-110 rounded-[88px] focus:outline-none"
            />
            <EyePassword
              onClick={confirmPasswordToggle.togglePassword}
              isOpenEye={confirmPasswordToggle.isOpenEye}
            />
            {errors.confirmPassword && (
              <span className="absolute bottom-2 sm:-bottom-4 pl-4.5 text-red-500 text-[12px]">
                {errors.confirmPassword?.message}
              </span>
            )}
          </p>
        </div>
        <div className="relative flex flex-col items-center w-full z-10">
          <div className="w-full sm:w-101 2xl:w-129.5">
            <input
              type="submit"
              className="flex justify-center items-center font-lexend text-sm 2xl:text-lg w-full h-10 sm:h-12.25 xl:w-101 xl:h-12.25 2xl:w-129.5 2xl:h-15.75 mt-6 mb-6 xl:mt-7.5 2xl:mt-10 bg-primary-600 cursor-pointer hover:bg-primary-800 active:bg-primary-600 transition-all duration-200 ease-in-out rounded-[82px]"
              value={isSubmitting ? "Submitting..." : "Reset password"}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
