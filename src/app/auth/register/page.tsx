import { FormBackground } from "@/components/FormBackground";
import { RegisterForm } from "@/forms/RegisterForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";

const Register = () => {
  return (
    <div>
      <FormBackground>
        <RegisterForm />
      </FormBackground>
      <TestimonialsSection />
    </div>
  );
};

export default Register;
