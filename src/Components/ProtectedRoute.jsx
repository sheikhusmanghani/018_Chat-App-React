import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isloggedin } = useContext(authContext);

  return isloggedin ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
