import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Components/Cart/Cart";
import Home from "../Components/Home/Home";

import Navbar from "../Components/Navbar/Navbar";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
};

export default Allroutes;
