
import { useState } from "react";
import { Link } from "react-router-dom";
import userGroupIcon from "../../assets/images/signup-logo.png";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  function handleChange(e) {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value 
    }))
  }

  return (
    <div>
      <img src={userGroupIcon} alt="" className="mx-auto w-9 pt-9" />
      <h2 className="text-2xl font-semibold mb-2 text-center">
        WelcomeBack To MentorConnect
      </h2>
      <p className="text-center text-xs text-[#374151] pb-4">Sign in to your account</p>

      <div className="max-w-lg mx-auto shadow-lg rounded-2xl p-6 bg-[#FFFFFF]">
        <form action="">
          <div>
            <label htmlFor="email" className="text-[#334155] text-xs">Email</label>
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

          <div className="my-9">
            <label htmlFor="password" className="text-[#334155] text-xs">Password</label>
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
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition "
          >
            Login
          </button>
        </form>
        <div className="text-center">
          <p className="text-xs text-[#374151]">Already have an account?</p>
          <Link to="/sign-up" className="text-[#2563EB] text-xs">Sign In</Link>
        </div>
      </div>

    </div>
  )
}

export default Login