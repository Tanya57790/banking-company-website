import { FormBackground } from "@/components/FormBackground";
import { LoginForm } from "@/forms/LoginForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Login() {
  return (
    <div>
      <FormBackground>
        <LoginForm />
      </FormBackground>
      <TestimonialsSection />
    </div>
  );
}
