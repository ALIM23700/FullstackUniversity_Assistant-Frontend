import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  // Debug logs
  console.log("PrivateRoute check:");
  console.log("Token found:", token);

  if (!token) {
    console.log("No token — redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("Token exists — rendering children");
  return children;
};

export default PrivateRoute;