import { login } from "../../firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import userGroupIcon from "../../assets/images/signup-logo.png";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // For showing errors
  const navigate = useNavigate();
  const { firebaseUser, role } = useAuth();

  // Automatically redirect after login
  useEffect(() => {
    if (firebaseUser && role) {
      if (role === "mentor") {
        navigate("/mentor");
      } else if (role === "mentee") {
        navigate("/mentee");
      }
    }
  }, [firebaseUser, role, navigate]);

  function handleChange(e) {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const { email, password } = loginData;
      await login(email, password);
      setError(""); // Clear previous error if login succeeds
      alert("Login successful");
    } catch (err) {
      console.error(err.message);
      setError("Login failed. Check your email or password.");
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <img src={userGroupIcon} alt="" className="mx-auto w-9 pt-9" />
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Welcome Back to MentorConnect
      </h2>
      <p className="text-center text-xs text-[#374151] pb-4">
        Sign in to your account
      </p>

      <div className="max-w-lg w-full mx-auto shadow-lg rounded-2xl p-6 bg-white">
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="text-[#334155] text-xs">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={loginData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="text-[#334155] text-xs">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
            />
          </div>

          {error && <p className="text-red-500 text-xs mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-[#374151]">Don't have an account?</p>
          <Link to="/sign-up" className="text-[#2563EB] text-xs">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;