"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, type SignInSchema } from "@/lib/schema";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const useLoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmitSignIn: SubmitHandler<SignInSchema> = async (data) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      setError("root", {
        message: error.message ?? "Sign In failed",
      });
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return {
    register,
    handleSubmit,
    errors,
    setError,
    isSubmitting,
    onSubmitSignIn,
  };
};

export default useLoginForm;
