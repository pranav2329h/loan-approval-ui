import DashboardLayout from "../layouts/DashboardLayout";
import KpiCard from "../components/dashboard/KpiCard";

const Dashboard = () => {
  return (
    <DashboardLayout>

      <div className="max-w-6xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-gray-400 mt-2">
            Overview of your credit risk insights
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <KpiCard title="Total Applications" value="1,248" subtitle="Last 30 days" />
          <KpiCard title="Approval Rate" value="68%" subtitle="Based on ML prediction" />
          <KpiCard title="High Risk Cases" value="214" subtitle="Requires review" />
        </div>

      </div>

    </DashboardLayout>
  );
};

export default Dashboard;
