import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";

import Navbar from "../Components/Navbar/Navbar";
import Products from "./Products";
import Admin from "../Components/Admin/Admin";

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
