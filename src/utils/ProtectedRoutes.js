import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const user = sessionStorage.getItem("mydata");

  return user ? children : <Navigate to="/" replace />;
};

export const PublicRoute = ({ children }) => {
  const user = sessionStorage.getItem("mydata");

  return user ? <Navigate to="/Home" replace /> : children;
};
