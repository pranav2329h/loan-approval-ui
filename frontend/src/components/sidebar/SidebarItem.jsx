import { Link } from "react-router-dom";

const SidebarItem = ({ to, label, active }) => {
  return (
    <Link
      to={to}
      className={`
        block px-4 py-3 rounded-lg text-sm font-medium
        transition
        ${active
          ? "bg-emerald-500/10 text-emerald-400"
          : "text-gray-400 hover:bg-gray-800 hover:text-white"}
      `}
    >
      {label}
    </Link>
  );
};

export default SidebarItem;
