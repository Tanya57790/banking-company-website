"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordSchema } from "@/lib/schema";
import { authClient } from "@/lib/auth-client";

const useForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmitForgotPassword: SubmitHandler<ForgotPasswordSchema> = async (
    data
  ) => {
    const { error } = await authClient.requestPasswordReset({
      email: data.email,
      redirectTo: "/auth/reset-password",
    });

    if (error) {
      setError("root", {
        message: error.message ?? "Reset password failed",
      });
      return;
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmitForgotPassword,
  };
};

export default useForgotPasswordForm;
