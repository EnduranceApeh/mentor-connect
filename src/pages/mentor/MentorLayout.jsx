import Sidebar from "../../components/ui/Sidebar";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

import { User, ClipboardList } from "lucide-react";


function MentorLayout() {

  const mentorLinks = [
  {
    to: "/mentor",
    label: "Edit Profile",
    icon: User,
    end: true,
  },
  {
    to: "/mentor/requests",
    label: "Requests",
    icon: ClipboardList,
  },
];

  return(
     <div className="h-screen flex bg-[#E5E7EB]">
      <TopBar />
      {/* Fixed Sidebar */}
      <Sidebar links={mentorLinks} />

      {/* Right Section */}
      <div className="flex-1 flex flex-col ml-64">

        {/* Page Content */}
        <main className="flex-1 px-3 pt-30 bg-[#E5E7EB] overflow-y-auto">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default MentorLayout;