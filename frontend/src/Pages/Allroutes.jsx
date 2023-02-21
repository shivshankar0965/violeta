import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";

import Navbar from "../Components/Navbar/Navbar";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Allroutes;
