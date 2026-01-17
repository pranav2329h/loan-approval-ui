import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import AuthLayout from "../layouts/AuthLayout";
import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <AuthLayout>
      <AuthCard
        title="Create Your Account"
        subtitle="Begin your journey with CrediSure"
      >
        <p className="text-center text-gray-400 text-sm mb-6 italic">
          “Better data leads to better decisions.”
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
          onClick={handleRegister}
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
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-emerald-400 hover:underline"
          >
            Login
          </Link>
        </p>
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;
