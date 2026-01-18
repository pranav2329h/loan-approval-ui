const KpiCard = ({ title, value, subtitle }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:shadow-xl transition">
      <p className="text-sm text-gray-400">{title}</p>
      <h2 className="text-3xl font-bold mt-2">{value}</h2>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
};

export default KpiCard;
