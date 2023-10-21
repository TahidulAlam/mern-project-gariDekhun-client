/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// import { alert } from "react-hot-alert";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { isValidEmail, isValidPassword } from "../../components/validation";
import useAuth from "../../hooks/useAuth";
import SocialAuth from "../../components/SocialAuth";
import swal from "sweetalert";

SocialAuth;
const Login = () => {
  const { signIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isValidEmail(email)) {
      signIn(email, password)
        .then(() => {
          swal("Sign In seccessfully", "success");
          navigate(location.state ? location.state : "/");
        })
        .catch((err) => swal("invalid input", "error"));
    } else {
      return swal("invalid input", "error");
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
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSignIn}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 text-gary-700 text-black bg-white border rounded-md focus:border-slate-400 focus:ring-slate-300 focus:outline-none focus:ring focus:ring-opacity-40 "
                placeholder="Enter your Email"
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
            <a
              href="#"
              className="text-xs text-gary-700 dark:text-white hover:underline"
            >
              Forget Password?
            </a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide dark:text-black text-white transition-colors duration-200 transform bg-gray-700 dark:bg-white rounded-md hover:bg-gray-600 dark:hover:bg-white focus:outline-none focus:bg-gray-600 dark:focus:bg-white">
                Login
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700 dark:text-white">
            Don't have an account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-gray-700 dark:text-white hover:underline"
            >
              Sign up{" "}
            </Link>
          </p>
          <SocialAuth></SocialAuth>
        </div>
      </div>
    </div>
  );
};

export default Login;
