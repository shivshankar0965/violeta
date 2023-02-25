import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Products from "./Products";
import SignUp from "../Components/Signup/signup";
import SignIn from "../Components/Login/login";
const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default Allroutes;
