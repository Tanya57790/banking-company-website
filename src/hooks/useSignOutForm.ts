"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const useSignOutForm = () => {
  const router = useRouter();

  const onSubmitSignOut = async () => {
    const { error } = await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    });

    if (error) {
      console.error("Sign Out failed");
      return;
    }
  };

  return {
    onSubmitSignOut,
  };
};

export default useSignOutForm;
