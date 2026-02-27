import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Menu } from "lucide-react";

function MenteeNavbar({ toggleSidebar }) {
  const [search, setSearch] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center justify-between px-4 sm:px-6 lg:px-10 shadow-md z-50">
      {/* Hamburger for mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 rounded hover:bg-gray-100 transition"
      >
        <Menu size={24} />
      </button>

      {/* Logo */}
      <div className="hidden md:flex flex-shrink-0">
        <img src={logo} alt="logo" className="w-36 sm:w-44" />
      </div>

      {/* Search bar */}
      <div className="flex-1 max-w-xl ml-4">
        <input
          type="text"
          placeholder="Search mentors by role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />
      </div>
    </header>
  );
}

export default MenteeNavbar;