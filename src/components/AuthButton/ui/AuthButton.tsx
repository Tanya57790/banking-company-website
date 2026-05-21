"use client";

import {
  getSocialHandler,
  type ProviderVariant,
} from "@/utils/getSocialHandler";
import { GoogleIcon } from "@/components/GoogleIcon";
import { FacebookIcon } from "@/components/FacebookIcon";
import { AppleIcon } from "@/components/AppleIcon";
import { containerClass, buttonClass } from "./data";

interface AuthButtonProps {
  provider: ProviderVariant;
}

const AuthButton = ({ provider }: AuthButtonProps) => {
  return (
    <>
      {provider === "google" && (
        <div className={containerClass}>
          <button
            type="button"
            aria-label="Continue with Google"
            onClick={getSocialHandler(provider)}
            className={buttonClass}
          >
            <GoogleIcon />
          </button>
        </div>
      )}
      {provider === "facebook" && (
        <div className={containerClass}>
          <button
            type="button"
            aria-label="Continue with Facebook"
            onClick={getSocialHandler(provider)}
            className={buttonClass}
          >
            <FacebookIcon variant="form" />
          </button>
        </div>
      )}
      {provider === "apple" && (
        <div className={containerClass}>
          <button
            type="button"
            aria-label="Continue with Apple"
            onClick={getSocialHandler(provider)}
            className={buttonClass}
          >
            <AppleIcon />
          </button>
        </div>
      )}
    </>
  );
};

export default AuthButton;
