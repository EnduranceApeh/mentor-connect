import Sidebar from "../../components/ui/Sidebar";
import MenteeNavbar from "./MenteeNavbar";
import { Outlet } from "react-router-dom";

import { Users, ClipboardList } from "lucide-react";


function MenteeLayout() {

  const menteeLinks = [
  {
    to: "/mentee",
    label: "Explore Mentor",
    icon: Users,
    end: true,
  },
  {
    to: "/mentee/request-status",
    label: "Request Status",
    icon: ClipboardList,
  },
];

  return(
     <div className="h-screen flex bg-[#F9FAFB]">
      <MenteeNavbar />
      {/* Fixed Sidebar */}

      <Sidebar links={menteeLinks} />

      {/* Right Section */}
      <div className="flex-1 flex flex-col ml-64">

        {/* Page Content */}
        <main className="flex-1 px-3 pt-30 bg-[#F9FAFB] overflow-y-auto ">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default MenteeLayout;