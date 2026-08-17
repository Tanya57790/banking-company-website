import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { sendEmail } from "./email";
import { hashPassword, verifyPassword } from "./password";
import { testUtils } from "better-auth/plugins";

export interface TypedUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
}

export const auth = betterAuth({
  plugins: [...(process.env.NODE_ENV === "test" ? [testUtils()] : [])],
  baseURL: process.env.BETTER_AUTH_URL! ?? "http://localhost:3000",
  database: prismaAdapter(prisma, {
    provider: "mysql",
  }),
  user: {
    additionalFields: {
      firstName: {
        type: "string",
        required: true,
        input: true,
      },
      lastName: {
        type: "string",
        required: true,
        input: true,
      },
      role: { type: "string", required: false, input: false },
      balance: { type: "number", required: false, input: false },
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
    sendResetPassword: async ({ user, url, token }) => {
      try {
        console.log("=== Attempt to send email ===", user.email);
        const verifyUrl = `${url}?token=${token}&redirect=/auth/login`;

        await sendEmail({
          to: user.email,
          subject: "Reset your password",
          text: `Click the link to reset your password: ${verifyUrl}`,
        })
          .then(() => console.log(`Email sent to ${user.email}`))
          .catch((err) => console.error("Background sending error:", err));
        console.log("=== Email sent successfully ===");
      } catch (error) {
        console.error("=== Nodemailer critical error ===");
        console.error(error);

        throw new Error(
          "Failed to send reset password email due to SMTP misconfiguration."
        );
      }
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: false,
    sendVerificationEmail: async ({ user, url, token }) => {
      try {
        console.log("=== Attempt to send email ===", user.email);
        const verifyUrl = `${url}?token=${token}&redirect=/auth/login`;

        sendEmail({
          to: user.email,
          subject: "Verify your email address",
          text: `Click the link to verify your email: ${verifyUrl}`,
        })
          .then(() => console.log(`Email sent to ${user.email}`))
          .catch((err) => console.error("Background sending error:", err));
        console.log("=== Email sent successfully ===");
      } catch (error) {
        console.error("=== Nodemailer critical error ===");
        console.error(error);

        throw new Error(
          "Failed to send verification email due to SMTP misconfiguration."
        );
      }
    },
    onExistingUserSignUp: async ({ user }: { user: TypedUser }) => {
      try {
        console.log("=== Attempt to send email ===", user.email);
        await sendEmail({
          to: user.email,
          subject: "Sign-up attempt with your email",
          text: "Someone tried to create an account using your email address. If this was you, try signing in instead. If not, you can safely ignore this email.",
        })
          .then(() => console.log(`Email sent to ${user.email}`))
          .catch((err) => console.error("Background sending error:", err));
      } catch (error) {
        console.error("=== Nodemailer critical error ===");
        console.error(error);

        throw new Error(
          "Failed to send email to verify registration of existing user due to SMTP misconfiguration."
        );
      }
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
});
