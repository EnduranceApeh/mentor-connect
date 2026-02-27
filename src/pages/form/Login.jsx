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
    <div className="min-h-screen 
                flex flex-col items-center justify-center 
                bg-gray-50 
                px-4 sm:px-6 lg:px-8 
                py-10">

      <img src={userGroupIcon} alt="" className="w-10 mb-4" />

      <h2 className="text-2xl sm:text-3xl 
                 font-semibold 
                 text-center">
        Welcome Back to MentorConnect
      </h2>

      <p className="text-center text-sm text-gray-600 mt-2 mb-8">
        Sign in to your account
      </p>

      {/* Card */}
      <div className="w-full max-w-md 
                  bg-white shadow-lg 
                  rounded-2xl 
                  p-6 sm:p-8">

        <form onSubmit={handleLogin} className="space-y-6">

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-sm text-gray-700">
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
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 
                     focus:ring-2 focus:ring-blue-500 
                     focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-sm text-gray-700">
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
              className="mt-2 w-full border border-gray-300 rounded-lg p-3 
                     focus:ring-2 focus:ring-blue-500 
                     focus:outline-none"
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg 
                   font-semibold 
                   hover:bg-blue-600 
                   transition duration-200"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Don't have an account?
          </p>
          <Link
            to="/sign-up"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;