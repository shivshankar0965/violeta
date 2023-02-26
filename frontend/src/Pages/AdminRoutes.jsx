import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Components/Admin/Admin";
import Dashboard from "../Components/Admin/Dashboard";
import AdminProducts from "../Components/Admin/AdminProducts";
import AddProducts from "../Components/Admin/AddProducts";
import Users from "../Components/Admin/Users";
import ReqAuth from "../PrivateRoutes/PrivateRoutes";

const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/admin"
          element={
            <ReqAuth>
              <Admin />
            </ReqAuth>
          }
        >
          <Route
            path="dashboard"
            element={
              <ReqAuth>
                <Dashboard />
              </ReqAuth>
            }
          />
          <Route
            path="products"
            element={
              <ReqAuth>
                <AdminProducts />
              </ReqAuth>
            }
          />
          <Route
            path="addproduct"
            element={
              <ReqAuth>
                <AddProducts />
              </ReqAuth>
            }
          />
          <Route
            path="orders"
            element={
              <ReqAuth>
                <AdminProducts />
              </ReqAuth>
            }
          />
          <Route
            path="users"
            element={
              <ReqAuth>
                <Users />
              </ReqAuth>
            }
          />
          <Route
            path="reviews"
            element={
              <ReqAuth>
                <AdminProducts />
              </ReqAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default AdminRoutes;
