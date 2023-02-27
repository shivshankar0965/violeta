// import React from "react";
// import { Navigate } from "react-router-dom";

// const PrivateRoutes = ({ children }) => {
//   let token = localStorage.getItem("token");
//   if (token) {
//     return <Navigate to="/login" />;
//   } else {
//     return children;
//   }
// };

// export default PrivateRoutes;

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ReqAuth = ({ children }) => {
  let token = localStorage.getItem("token");
  let location = useLocation();
  let isAuth = useSelector((state) => state.AuthReducer.isAuth);

  if (!isAuth && !token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default ReqAuth;
