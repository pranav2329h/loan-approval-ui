const RiskBadge = ({ level }) => {
  const styles = {
    Low: "bg-emerald-500/20 text-emerald-400",
    Medium: "bg-yellow-500/20 text-yellow-400",
    High: "bg-red-500/20 text-red-400",
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-sm font-semibold ${styles[level]}`}
    >
      {level} Risk
    </span>
  );
};

export default RiskBadge;
