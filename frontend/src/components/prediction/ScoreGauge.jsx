const ScoreGauge = ({ score }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-40 h-40 rounded-full border-8 border-gray-800 flex items-center justify-center">
        <span className="text-4xl font-bold">{score}%</span>
      </div>
      <p className="text-gray-400 mt-3 text-sm">Approval Probability</p>
    </div>
  );
};

export default ScoreGauge;
