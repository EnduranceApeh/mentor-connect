import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4">
        {/* Logo */}
        <div className="w-36 sm:w-44">
          <img src={logo} alt="logo" className="w-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-light text-sm">
          <li>
            <a href="#whyChooseUs" className="hover:text-blue-500 transition">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#howItWorks" className="hover:text-blue-500 transition">
              How It Works
            </a>
          </li>
          <li>
            <a href="#successStories" className="hover:text-blue-500 transition">
              Success Stories
            </a>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:text-blue-500 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-gray-600 focus:outline-none"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg px-4 py-6 space-y-4 text-center">
          <li>
            <a href="#whyChooseUs" className="block text-gray-700 hover:text-blue-500 transition">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#howItWorks" className="block text-gray-700 hover:text-blue-500 transition">
              How It Works
            </a>
          </li>
          <li>
            <a href="#successStories" className="block text-gray-700 hover:text-blue-500 transition">
              Success Stories
            </a>
          </li>
          <li>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-blue-500 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="/sign-up"
              className="block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Get Started
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;