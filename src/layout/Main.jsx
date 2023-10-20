/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/shared/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className=" font-poppins dark:bg-gradient-to-r dark:from-[#060606] dark:via-[#060606] dark:to-[#2B2C41]">
      <div className="max-w-6xl mx-auto">
        <div className=" px-5">
          <Header></Header>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
