import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../firebase/auth";
import { User, GraduationCap } from "lucide-react";
import userGroupIcon from "../../assets/images/signup-logo.png";

function Signup() {
  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    const { email, password, name } = formData;
    await signUp(email, password, name, role);
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10">

      <img src={userGroupIcon} alt="" className="mx-auto w-10 mb-4" />

      <h2 className="text-2xl sm:text-3xl font-semibold text-center">
        Join MentorConnect
      </h2>

      <p className="text-center text-sm text-gray-600 mt-2 mb-8">
        Create your account to start connecting
      </p>

      {/* Card */}
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8">

        <p className="text-center text-sm text-gray-600 mb-6">
          I want to join as
        </p>

        {/* Role Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

          <button
            type="button"
            onClick={() => setRole("mentor")}
            className={`border rounded-xl p-5 transition text-center ${
              role === "mentor"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <GraduationCap className="mb-2 mx-auto" size={28} />
            <h3 className="font-semibold text-sm text-gray-900">
              Mentor
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Share knowledge.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setRole("mentee")}
            className={`border rounded-xl p-5 transition text-center ${
              role === "mentee"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <User className="mb-2 mx-auto" size={28} />
            <h3 className="font-semibold text-sm text-gray-900">
              Mentee
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Learn & grow.
            </p>
          </button>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          {/* Password Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>

        </form>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?
          </p>
          <Link
            to="/login"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Signup;