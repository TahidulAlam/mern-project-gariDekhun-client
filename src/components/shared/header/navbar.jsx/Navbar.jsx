/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../../../../switcher/Switcher";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <div className="navbar z-50 rounded-b-md flex justify-between bg-white dark:bg-transparent">
        <div className="navbar w-[30%] flex-row lg:justify-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn bg-transparent border-transparent text-white pl-0  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li>
                <NavLink
                  to={"/"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-products"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1"
                >
                  Add Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-cart"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1 "
                >
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1"
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-3">
            <Logo></Logo>{" "}
            <span className="text-2xl font-poppins dark:text-white text-dark font-semibold hidden lg:block">
              {" "}
              Gari Dekhun
            </span>
          </div>
        </div>
        <div className="navbar w-[70%] flex-row lg:justify-between justify-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 dark:text-white text-white active:text-white">
              <li>
                <NavLink
                  to={"/"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1 text-black dark:text-white"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/add-products"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1 text-black dark:text-white"
                >
                  Add Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/my-cart"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1 text-black dark:text-white"
                >
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about-us"}
                  activeClassName="bg-white text-dark-blue"
                  className="block py-1 text-black dark:text-white"
                >
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 rounded-full">
              <img src="/GariDekhunLogo.png" alt="Logo" />
            </div>
            <NavLink
              to={"/logIn"}
              activeClassName="bg-white text-dark-blue"
              className="block py-1 text-white dark:text-black bg-black dark:bg-white rounded-lg px-3"
            >
              Log In
            </NavLink>
            <div>
              <Switcher />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
