import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, redirectTo = "/", children }) => {
  if (!token) {
    localStorage.removeItem("token");
    return <Navigate to={redirectTo} />;
  }
  return children;
};

export default ProtectedRoute;
