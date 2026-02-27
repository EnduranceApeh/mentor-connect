import { useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import MenteeNavbar from "./MenteeNavbar";
import { Outlet } from "react-router-dom";
import { Users, ClipboardList } from "lucide-react";

function MenteeLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menteeLinks = [
    { to: "/mentee", label: "Explore Mentor", icon: Users, end: true },
    { to: "/mentee/request-status", label: "Request Status", icon: ClipboardList },
  ];

  return (
    <div className="flex h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar links={menteeLinks} open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Page content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <MenteeNavbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Main content */}
        <main className="pt-20 px-4 sm:px-6 lg:px-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MenteeLayout;