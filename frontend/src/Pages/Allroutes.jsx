import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import Navbar from "../Components/Navbar/Navbar";
import Products from "./Products";
const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </>
  );
};

export default Allroutes;
