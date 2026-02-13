import { NavLink } from "react-router-dom";

import { Users, ClipboardList } from "lucide-react";

function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 w-40 h-screen bg-[#fff] p-4 ">
      <nav className="flex flex-col gap-4">
        {/* Explore Mentor Link*/}
        <NavLink
          to="/mentee"
          end
          className={({ isActive }) =>
            `flex items-center justify-center gap-[5px] p-3 rounded text-xs whitespace-nowrap ${isActive ? "bg-[#EFF6FF] text-[#3B82F6]" : "bg-[#ffff] text-[#374151] hover:bg-gray-200 "
            }`
          }
        >
          <Users size={15} /> <span>Explore Mentor</span>
        </NavLink>

        {/* Request Status */}
        <NavLink
          to="/mentee/request-status"
          className={({ isActive }) =>
            `flex items-center justify-center p-3 rounded text-xs whitespace-nowrap gap-[5px] ${
              isActive ? "bg-[#EFF6FF] text-[#3B82F6]" : "text-[#374151] hover:bg-gray-200"
            }`
          }
        >
          <ClipboardList size={15} />
          <span>Request Status</span>
        </NavLink>


      </nav>
    </aside>
  )
}

export default Sidebar