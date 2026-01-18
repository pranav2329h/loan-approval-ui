const LoanStepOne = ({ data, setData }) => {
  return (
    <div className="space-y-6">
      <input
        type="number"
        placeholder="Age"
        value={data.age}
        onChange={(e) => setData({ ...data, age: e.target.value })}
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
      />

      <select
        value={data.employment}
        onChange={(e) => setData({ ...data, employment: e.target.value })}
        className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700"
      >
        <option value="">Employment Type</option>
        <option>Salaried</option>
        <option>Self-Employed</option>
        <option>Business Owner</option>
      </select>
    </div>
  );
};

export default LoanStepOne;
