const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-700">
      <h1 className="text-3xl font-bold text-center text-white mb-2">
        {title}
      </h1>
      <p className="text-gray-400 text-center mb-6">
        {subtitle}
      </p>
      {children}
    </div>
  );
};

export default AuthCard;
