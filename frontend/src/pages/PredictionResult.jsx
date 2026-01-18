import DashboardLayout from "../layouts/DashboardLayout";
import RiskBadge from "../components/prediction/RiskBadge";
import ScoreGauge from "../components/prediction/ScoreGauge";
import DecisionSummary from "../components/prediction/DecisionSummary";
import { useLocation, useNavigate } from "react-router-dom";

const PredictionResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { formData, result } = location.state || {};

  if (!result) {
    navigate("/loan");
    return null;
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl">

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Loan Decision</h1>
          <p className="text-gray-400">
            AI-based credit risk assessment result
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col items-center">
            <ScoreGauge score={result.score} />
            <div className="mt-6">
              <RiskBadge level={result.riskLevel} />
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <DecisionSummary decision={result.decision} />

            <div className="flex gap-4">
              <button className="px-6 py-2 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition">
                Apply Suggestions
              </button>

              <button
                onClick={() => navigate("/loan")}
                className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Back to Form
              </button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default PredictionResult;
