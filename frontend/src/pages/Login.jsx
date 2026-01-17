import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

const Login = () => {
  return (
    <AuthLayout>
      <AuthCard
        title="CrediSure"
        subtitle="Smart Credit. Confident Decisions."
      >
        <AuthInput label="Email" type="email" />
        <AuthInput label="Password" type="password" />
        <AuthButton text="Sign In" />

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <span className="text-emerald-400 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
