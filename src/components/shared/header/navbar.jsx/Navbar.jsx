/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import Switcher from "../../../../switcher/Switcher";
import { TbBrandGoogleBigQuery } from "react-icons/tb";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <div className="navbar sticky z-50 rounded-b-md flex justify-between">
        <div className="navbar-start">
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
                  className="block py-1"
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
            <span className="text-2xl font-poppins dark:text-white text-white font-semibold hidden lg:block">
              {" "}
              Gari Dekhun
            </span>
          </div>
        </div>
        <div className="navbar-end flex lg:justify-between">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1 dark:text-white text-white active:text-white">
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
                  className="block py-1"
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
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/GariDekhunLogo.png" alt="Logo" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 "
            >
              <li>
                <div className="flex justify-between">
                  <div>
                    <NavLink
                      to={"/logIn"}
                      activeClassName="bg-white text-dark-blue"
                      className="block py-1"
                    >
                      Log In
                    </NavLink>
                  </div>
                  <div>
                    <Switcher />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
