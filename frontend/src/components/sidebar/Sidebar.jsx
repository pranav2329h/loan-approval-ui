import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import logo from "../../assets/logo/credisure-logo.webp";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
      
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-800">
        <img src={logo} alt="CrediSure" className="w-8" />
        <span className="text-xl font-bold">CrediSure</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <SidebarItem
          to="/dashboard"
          label="Dashboard"
          active={pathname === "/dashboard"}
        />
        <SidebarItem
          to="/loan"
          label="New Loan"
          active={pathname === "/loan"}
        />
        <SidebarItem
          to="/profile"
          label="Profile"
          active={pathname === "/profile"}
        />
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 text-xs text-gray-500 border-t border-gray-800">
        © 2026 CrediSure
      </div>
    </aside>
  );
};

export default Sidebar;
