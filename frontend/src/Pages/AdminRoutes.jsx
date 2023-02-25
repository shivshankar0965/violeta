import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";
import AdminProducts from "../Components/Admin/AdminProducts";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="product/new" element={<AdminProducts />} />
          <Route path="orders" element={<AdminProducts />} />
          <Route path="users" element={<AdminProducts />} />
          <Route path="reviews" element={<AdminProducts />} />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
