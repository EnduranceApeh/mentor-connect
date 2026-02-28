import { useState } from "react";
import Sidebar from "../../components/ui/Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { User, ClipboardList } from "lucide-react";

function MentorLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mentorLinks = [
    { to: "/mentor", label: "Edit Profile", icon: User, end: true },
    { to: "/mentor/requests", label: "Requests", icon: ClipboardList },
  ];

  return (
    <div className="flex h-screen bg-[#E5E7EB]">
      {/* Sidebar */}
      <Sidebar links={mentorLinks} open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Right Section */}
      <div className="flex-1 flex flex-col">
        {/* TopBar */}
        <TopBar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        {/* Page Content */}
        <main className="pt-20 px-4 sm:px-6 lg:px-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MentorLayout;