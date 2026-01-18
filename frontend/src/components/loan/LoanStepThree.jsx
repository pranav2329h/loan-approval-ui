const LoanStepThree = ({ data }) => {
  return (
    <div className="space-y-4 text-sm text-gray-300">
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Employment:</strong> {data.employment}</p>
      <p><strong>Income:</strong> ₹{data.income}</p>
      <p><strong>Loan Amount:</strong> ₹{data.loanAmount}</p>

      <p className="text-gray-400 italic mt-4">
        “Please review your details carefully before submission.”
      </p>
    </div>
  );
};

export default LoanStepThree;
