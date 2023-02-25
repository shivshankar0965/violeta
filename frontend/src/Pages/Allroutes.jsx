import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignIn from "../Components/Login/login";

import Navbar from "../Components/Navbar/Navbar";
import Products from "./Products";
import Admin from "../Components/Admin/Admin";
import SignUp from "../Components/Signup/signup";
import SingleProductPage from "../Components/ProductPage/SingleProductPage";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Admin />} />
        <Route path="/products/:id" element={<SingleProductPage />} />


        

      </Routes>
    </>
  );
};

export default Allroutes;
