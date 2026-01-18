import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import LoanApplication from "../pages/LoanApplication";

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
<Route
  path="/loan"
  element={
    <PrivateRoute>
      <LoanApplication />
    </PrivateRoute>
  }
/>

    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
