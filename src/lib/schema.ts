import * as z from "zod";

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
  email: z
    .string()
    .max(320, "Maximum length is 320 characters")
    .min(1, "Required field")
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: "Email is not valid",
    }),
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
});

export const signInSchema = z.object({
  email: z
    .string()
    .max(320, "Maximum length is 320 characters")
    .min(1, "Required field")
    .refine((email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), {
      message: "Email is not valid",
    }),
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
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
export type SignInSchema = z.infer<typeof signInSchema>;
