"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPasswordSchema, type ResetPasswordSchema } from "@/lib/schema";
import { authClient } from "@/lib/auth-client";

const useResetPasswordForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmitResetPassword: SubmitHandler<ResetPasswordSchema> = async (
    data
  ) => {
    if (!token) return;

    const { error } = await authClient.resetPassword({
      newPassword: data.password,
      token,
    });

    if (error) {
      if (error.status === 422) {
        setError("password", { type: "server", message: error.message });
      } else {
        setError("confirmPassword", { type: "server", message: error.message });
      }
      return;
    }

    router.push("/auth/login");
    router.refresh();
  };

  return {
    register,
    handleSubmit,
    errors,
    setError,
    isSubmitting,
    onSubmitResetPassword,
  };
};

export default useResetPasswordForm;
