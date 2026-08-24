import { Suspense } from "react";
import { ResetPasswordForm } from "@/forms/ResetPasswordForm";
import { FormBackground } from "@/components/FormBackground";

export default function ResetPassword() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FormBackground>
        <ResetPasswordForm />
      </FormBackground>
    </Suspense>
  );
}
