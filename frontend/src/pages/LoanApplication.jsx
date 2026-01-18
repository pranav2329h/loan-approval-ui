import { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import StepIndicator from "../components/loan/StepIndicator";
import LoanStepOne from "../components/loan/LoanStepOne";
import LoanStepTwo from "../components/loan/LoanStepTwo";
import LoanStepThree from "../components/loan/LoanStepThree";

const LoanApplication = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    employment: "",
    income: 50000,
    loanAmount: 500000,
  });

  const steps = [
    <LoanStepOne data={formData} setData={setFormData} />,
    <LoanStepTwo data={formData} setData={setFormData} />,
    <LoanStepThree data={formData} />,
  ];

  return (
    <DashboardLayout>

      {/* Page wrapper controls width */}
      <div className="max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">New Loan Application</h1>
          <p className="text-gray-400 mt-2">
            Provide details to evaluate your credit eligibility
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
          <StepIndicator step={step} />

          {steps[step]}

          {/* Navigation */}
          <div className="flex justify-between mt-10">
            {step > 0 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-6 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
              >
                Back
              </button>
            )}

            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-emerald-500 text-black rounded-lg ml-auto hover:bg-emerald-400 transition"
              >
                Next
              </button>
            ) : (
              <button
                className="px-6 py-2 bg-emerald-500 text-black rounded-lg ml-auto hover:bg-emerald-400 transition"
              >
                Submit Application
              </button>
            )}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default LoanApplication;
