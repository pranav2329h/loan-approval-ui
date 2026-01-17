import bg from "../assets/images/auth-bg.webp";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      
      {/* Background Image */}
      <img
        src={bg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
