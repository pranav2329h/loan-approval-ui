const AuthButton = ({ text }) => {
  return (
    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-semibold hover:scale-[1.02] active:scale-95 transition-transform duration-200 shadow-lg">
      {text}
    </button>
  );
};

export default AuthButton;
