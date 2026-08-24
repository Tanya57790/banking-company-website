import * as z from "zod";

const emailSchema = {
  email: z
    .string()
    .max(320, "Maximum length is 320 characters")
    .min(1, "Required field")
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: "Email is not valid",
    }),
};

const passwordSchema = {
  password: z
    .string()
    .min(1, "Required field")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 20 characters")
    .refine(
      (val) => /[A-Z]/.test(val),
      "Must contain at least one uppercase letter"
    )
    .refine(
      (val) => /[a-z]/.test(val),
      "Must contain at least one lowercase letter"
    )
    .refine((val) => /[0-9]/.test(val), "Must contain at least one number")
    .refine(
      (val) => /[!@#$%^&*]/.test(val),
      "Must contain at least one special character"
    ),
};

export const signUpSchema = z.object({
  firstName: z
    .string()
    .min(1, "Required field")
    .min(2, "First Name (at least 2 characters)")
    .max(50),
  lastName: z
    .string()
    .min(1, "Required field")
    .min(2, "Last Name (at least 2 characters)")
    .max(50),
  email: emailSchema.email,
  password: passwordSchema.password,
});

export const signInSchema = z.object({
  email: emailSchema.email,
  password: passwordSchema.password,
});

export const resetPasswordSchema = z
  .object({
    password: passwordSchema.password,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const forgotPasswordSchema = z.object({
  email: emailSchema.email,
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
