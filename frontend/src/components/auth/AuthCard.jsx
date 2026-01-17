import logo from "../../assets/logo/credisure-logo.webp";

const AuthCard = ({ children, title, subtitle }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <img
          src={logo}
          alt="CrediSure Logo"
          className="w-20 h-20"
        />
      </div>

      {/* Quote */}
      <p className="text-gray-300 text-sm italic mb-6 text-center px-4">
        “Trust is built when financial decisions are transparent and fair.”
      </p>

      {/* Card */}
      <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
          {title}
        </h1>

        <p className="text-gray-400 text-center mb-6 text-sm">
          {subtitle}
        </p>

        {children}
      </div>
    </div>
  );
};

export default AuthCard;
