import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const Register = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        subtitle="Start your smart credit journey"
      >
        <AuthInput label="Full Name" type="text" />
        <AuthInput label="Email" type="email" />
        <AuthInput label="Password" type="password" />
        <AuthButton text="Create Account" />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
