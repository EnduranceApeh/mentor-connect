import { NavLink } from "react-router-dom";

function Sidebar({ links }) {
  return (
    <aside className="fixed left-0 top-16 w-40 h-screen bg-white p-4">
      <nav className="flex flex-col gap-4">
        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={index}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `flex items-center justify-center gap-[5px] p-3 rounded text-xs whitespace-nowrap ${
                  isActive
                    ? "bg-[#EFF6FF] text-[#3B82F6]"
                    : "text-[#374151] hover:bg-gray-200"
                }`
              }
            >
              <Icon size={15} />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;