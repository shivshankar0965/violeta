import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
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
