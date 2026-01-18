import Sidebar from "../components/sidebar/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex bg-gray-950 text-white">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main area takes FULL remaining width */}
      <main className="flex-1 px-8 py-8">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;
