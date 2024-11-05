// src/components/ProtectedRoute.js
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isloggedin } = useContext(AuthContext);

  return isloggedin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
