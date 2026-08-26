"use client";

import { useSignOutForm } from "@/hooks";

const SignOutButton = () => {
  const { onSubmitSignOut } = useSignOutForm();
  return (
    <button
      onClick={onSubmitSignOut}
      className="flex cursor-pointer items-center font-lexend text-sm 2xl:text-lg text-grey-110 bg-primary-600 hover:bg-primary-800 active:bg-primary-600 transition-all duration-200 ease-in-out justify-center md:h-10.25 2xl:h-12.75 mx-0.75 xl:mx-1.5 2xl:mx-1.75 md:px-2.5 lg:px-4.5 2xl:px-5 rounded-[82px]"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
