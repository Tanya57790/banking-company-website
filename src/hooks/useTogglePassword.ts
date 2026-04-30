"use client";

import { useState } from "react";

const useTogglePassword = () => {
  const [isOpenEye, setIsOpenEye] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");

  function togglePassword() {
    setInputType(inputType === "password" ? "text" : "password");
    setIsOpenEye((prev) => !prev);
  }

  return { isOpenEye, inputType, togglePassword };
};

export default useTogglePassword;
