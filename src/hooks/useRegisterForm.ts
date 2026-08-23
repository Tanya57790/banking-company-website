"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpSchema } from "@/lib/schema";
import { authClient } from "@/lib/auth-client";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmitSignUp: SubmitHandler<SignUpSchema> = async (data) => {
    const { error } = await authClient.signUp.email({
      name: data.firstName,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      callbackURL: "/auth/login",
    });

    if (error) {
      setError("root", {
        message: error.message ?? "Registration failed",
      });
      return;
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    setError,
    isSubmitting,
    onSubmitSignUp,
  };
};

export default useRegisterForm;
