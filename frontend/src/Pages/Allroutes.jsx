import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home/Home";
import SignIn from "../Components/Login/login";

import Navbar from "../Components/Navbar/Navbar";
import SignUp from "../Components/Signup/signup";

const Allroutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/sign-in' element={<SignIn/>} />
    <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
    </>
  );
};

export default Allroutes;
