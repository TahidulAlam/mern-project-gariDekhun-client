/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
// import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialAuth from "../../components/SocialAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { isValidEmail, isValidPassword } from "../../components/validation";
import swal from "sweetalert";

const Registration = () => {
  const { createUser, updateUser } = useAuth();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleCreateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.img.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = { name, image, email, password };
    if (isValidEmail(email) && isValidPassword(password)) {
      createUser(email, password)
        .then(() => {
          updateUser(name, image).then(() =>
            swal("account create seccessfully", "success")
          );
          navigate("/");
        })
        .catch((err) => swal.error({ err }));
    } else {
      if (!isValidEmail(email)) {
        return swal.error("invalid email");
      } else if (!isValidPassword(password)) {
        return swal.error("plz use strong password");
      } else {
        return swal.error("plz use strong password and proper mail");
      }
    }
  };
  return (
    <div>
      <div
        className="relative flex flex-col justify-center min-h-screen
      overflow-hidden lg:bg-slate-100 md:bg-slate-100 bg-white dark:glass"
      >
        <div className="w-full p-6 m-auto bg-white dark:glass lg:shadow-md md:shadow-md rounded-md  lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-black dark:text-white font-poppins">
            Sign Up
          </h1>
          <form className="mt-6" onSubmit={handleCreateUser}>
            <div className="mb-2">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Name
              </label>
              <input
                type="name"
                name="name"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="Enter your full Nsame"
              />
              <label
                htmlFor="img"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Profile URL
              </label>
              <input
                type="text"
                name="img"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your profile URL"
              />

              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-3 flex items-center focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-gray-500" />
                  ) : (
                    <FaEye className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide dark:text-black text-white transition-colors duration-200 transform bg-gray-700 dark:bg-white rounded-md hover:bg-gray-600 dark:hover:bg-white focus:outline-none focus:bg-gray-600 dark:focus:bg-white">
                Sign Up{" "}
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-white">
            {" "}
            Already Have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-gray-700 dark:text-white hover:underline"
            >
              Log In
            </Link>
          </p>
          <SocialAuth></SocialAuth>{" "}
        </div>
      </div>
    </div>
  );
};

export default Registration;
