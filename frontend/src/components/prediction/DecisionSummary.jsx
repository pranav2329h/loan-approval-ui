const DecisionSummary = ({ decision }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-2">Decision Summary</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {decision}
      </p>
    </div>
  );
};

export default DecisionSummary;
