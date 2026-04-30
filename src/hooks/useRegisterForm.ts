"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type InferSchema } from "@/lib/schema";

const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InferSchema>({
    resolver: zodResolver(schema),
  });

  const reg = {
    errors,
    isSubmitting,
    handleSubmit,
  };

  const onSubmit: SubmitHandler<InferSchema> = async (data) => {
    await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    window.location.reload();
  };

  return { register, reg, onSubmit };
};

export default useRegisterForm;
