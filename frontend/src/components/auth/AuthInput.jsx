const AuthInput = ({ label, type, value, onChange }) => {
  return (
    <div className="relative mb-6">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="
          peer w-full px-4 py-3
          bg-gray-800 text-white
          border border-gray-700 rounded-lg
          outline-none
          focus:border-emerald-500
          transition
        "
      />

      <label
        className="
          absolute left-4 top-3
          text-gray-400 text-sm
          transition-all
          peer-placeholder-shown:top-3
          peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-400
          peer-focus:-top-2
          peer-focus:text-xs
          peer-focus:text-emerald-400
          peer-focus:bg-gray-900
          px-1
        "
      >
        {label}
      </label>
    </div>
  );
};

export default AuthInput;
