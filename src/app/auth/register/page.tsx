import { FormBackground } from "@/components/FormBackground";
import { RegisterForm } from "@/forms/RegisterForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Register() {
  return (
    <div>
      <FormBackground>
        <RegisterForm />
      </FormBackground>
      <TestimonialsSection />
    </div>
  );
}
