import { useState } from "react";
import { Link } from "react-router-dom";

import { signUp } from "../../firebase/auth";

import { User, GraduationCap } from "lucide-react";

import userGroupIcon from "../../assets/images/signup-logo.png"

function Signup() {
  const [role, setRole] = useState("");

  const [formData, setFormData] = useState({
    role: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange (e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  async function handleSubmit (e) {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!role) {
      alert("Please select a role");
      return;
    }

    console.log({ ...formData, role });
    const {email, password, name} = formData 

    // 👉 later:
    await signUp(email, password, name, role)
  };

  return (
    <div className=" bg-[#F9FAFB]">
      <img src={userGroupIcon} alt="" className="mx-auto w-9 pt-9"/>
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Join MentorConnect
      </h2>
      <p className="text-center text-xs text-[#374151] pb-4">Create your account to start connecting</p>

      {/* Role Selection */}
      <div className="max-w-lg mx-auto shadow-lg rounded-2xl p-6 bg-[#FFFFFF]">
        <p className="text-center text-xs text-[#374151] pb-4">I want to join as</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            type="button"
            onClick={() => setRole("mentor")}
            className={`border rounded-xl p-4 transition ${
              role === "mentor"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <GraduationCap className="mb-2 mx-auto" color="#9CA3AF"/>
            <h3 className="font-semibold text-cente text-xs text-[#111827]">Mentor</h3>
            <p className="text-xs text-gray-500 text-center whitespace-nowrap ...">
              Share knowledge.
            </p>
          </button>
          <button
            type="button"
            onClick={() => setRole("mentee")}
            className={`border rounded-xl p-4 transition ${
              role === "mentee"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200"
            }`}
          >
            <User className="mb-2 mx-auto" color="#9CA3AF"/>
            <h3 className="font-semibold text-center text-sm text-[#111827]">Mentee</h3>
            <p className="text-xs text-gray-500 text-center whitespace-nowrap ...">
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
            className="w-full border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
          />
          <div className="flex justify-between">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full/2 border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full/2 border border-[#D1D5DB] rounded-lg p-3 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition "
          >
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <p className="text-xs text-[#374151]">Already have an account?</p>
          <Link to="/Login" className="text-[#2563EB] text-xs">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;