import logo from "../../assets/images/logo.png";
import { Menu } from "lucide-react";

function TopBar({ toggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4 sm:px-6 lg:px-10 shadow-md z-50">
      {/* Hamburger for mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-100 transition"
      >
        <Menu size={24} />
      </button>

      {/* Logo: hidden on mobile */}
      <div className="hidden md:flex flex-shrink-0">
        <img src={logo} alt="logo" className="w-36 sm:w-44" />
      </div>

      {/* Placeholder for right side actions */}
      <div></div>
    </header>
  );
}

export default TopBar;