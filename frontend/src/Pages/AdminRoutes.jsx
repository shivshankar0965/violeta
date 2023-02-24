import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
