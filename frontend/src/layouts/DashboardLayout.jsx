import Sidebar from "../components/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      <Sidebar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default DashboardLayout;
