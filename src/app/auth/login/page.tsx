import { FormBackground } from "@/components/FormBackground";
import { LoginForm } from "@/forms/LoginForm";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const Login = () => {
  return (
    <div>
      <FormBackground>
        <LoginForm />
      </FormBackground>
      <TestimonialsSection />
    </div>
  );
};

export default Login;
