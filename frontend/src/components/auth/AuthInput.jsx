const AuthInput = ({ label, type, ...props }) => {
  return (
    <div className="relative mb-5">
      <input
        type={type}
        required
        className="peer w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none border border-gray-700 focus:border-emerald-500 transition"
        {...props}
      />
      <label className="absolute left-4 top-3 text-gray-400 text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-400 bg-gray-900 px-1 transition-all">
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
