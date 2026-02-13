import Sidebar from "./Sidebar";
import MenteeNavbar from "./MenteeNavbar";
import { Outlet } from "react-router-dom";

function MenteeLayout() {
  return(
     <div className="h-screen flex bg-[#E5E7EB]">
      <MenteeNavbar />
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex-1 flex flex-col ml-64">

        

        {/* Page Content */}
        <main className="flex-1 px-3 pt-30 bg-[#E5E7EB] overflow-y-auto ">
          <Outlet />
        </main>

      </div>

    </div>
  )
}

export default MenteeLayout;