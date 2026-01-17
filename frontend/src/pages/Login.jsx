import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch {
      setError("Invalid email or password");
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="CrediSure"
        subtitle="Smart Credit. Confident Decisions."
      >
        <p className="text-center text-gray-400 text-sm mb-6 italic">
          “Trust is built when decisions are transparent.”
        </p>

        <AuthInput
          label="Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <AuthInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="
            w-full py-3 rounded-lg
            bg-gradient-to-r from-emerald-500 to-teal-500
            text-black font-semibold
            hover:scale-[1.02]
            active:scale-95
            transition
            shadow-lg
          "
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-emerald-400 hover:underline"
          >
            Register
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;
