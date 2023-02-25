import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignIn from "../Components/Login/login";

import Navbar from "../Components/Navbar/Navbar";
import Products from "./Products";
import Admin from "../Components/Admin/Admin";
import SignUp from "../Components/Signup/signup";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Admin />} />
        

      </Routes>
    </>
  );
};

export default Allroutes;
