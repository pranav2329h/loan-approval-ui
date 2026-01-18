const StepIndicator = ({ step }) => {
  const steps = ["Personal", "Financial", "Review"];

  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((label, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
              ${step > index
                ? "bg-emerald-500 text-black"
                : "bg-gray-800 text-gray-400"}`}
          >
            {index + 1}
          </div>
          <span className="text-sm text-gray-300">{label}</span>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
