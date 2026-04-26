import { signIn } from "@/lib/auth-client";

export type ProviderVariant = "google" | "facebook" | "apple";

export const getSocialHandler = (provider: ProviderVariant) => {
  return async () => {
    await signIn.social({ provider });
  };
};
