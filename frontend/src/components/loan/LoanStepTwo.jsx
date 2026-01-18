const LoanStepTwo = ({ data, setData }) => {
  return (
    <div className="space-y-8">

      <div>
        <label className="text-gray-400 text-sm">
          Monthly Income: ₹{data.income}
        </label>
        <input
          type="range"
          min="10000"
          max="300000"
          step="5000"
          value={data.income}
          onChange={(e) => setData({ ...data, income: e.target.value })}
          className="w-full"
        />
      </div>

      <div>
        <label className="text-gray-400 text-sm">
          Loan Amount: ₹{data.loanAmount}
        </label>
        <input
          type="range"
          min="50000"
          max="5000000"
          step="50000"
          value={data.loanAmount}
          onChange={(e) => setData({ ...data, loanAmount: e.target.value })}
          className="w-full"
        />
      </div>

    </div>
  );
};

export default LoanStepTwo;
