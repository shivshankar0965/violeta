import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  let token = localStorage.getItem("token");
  if (token) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};

export default PrivateRoutes;
