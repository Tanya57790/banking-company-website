"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signUpSchema,
  signInSchema,
  type SignUpSchema,
  type SignInSchema,
} from "@/lib/schema";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const useRegisterForm = () => {
  const router = useRouter();

  const signUpForm = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });
  const signInForm = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  });

  const signUpReg = {
    register: signUpForm.register,
    handleSubmit: signUpForm.handleSubmit,
    errors: signUpForm.formState.errors,
    isSubmitting: signUpForm.formState.isSubmitting,
  };

  const signInReg = {
    register: signInForm.register,
    handleSubmit: signInForm.handleSubmit,
    errors: signInForm.formState.errors,
    isSubmitting: signInForm.formState.isSubmitting,
  };

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
      signUpForm.setError("root", {
        message: error.message ?? "Registration failed",
      });
      return;
    }
  };

  const onSubmitSignIn: SubmitHandler<SignInSchema> = async (data) => {
    const { error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
    });

    if (error) {
      signInForm.setError("root", {
        message: error.message ?? "Sign In failed",
      });
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  return { signUpReg, signInReg, onSubmitSignUp, onSubmitSignIn };
};

export default useRegisterForm;
