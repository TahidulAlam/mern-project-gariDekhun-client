/* eslint-disable no-unused-vars */
import swal from "sweetalert";
import { AiFillGoogleCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

useAuth;
const SocialAuth = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const handleSocialSignIn = (media) => {
    media()
      .then(() => {
        swal.success("Sign In seccessfully");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => swal.error("invalid input"));
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1  pt-4  gap-3">
        <button
          className="btn btn-outline hover:bg-black border-black text-black dark:text-white dark:border-white dark:hover:bg-black"
          onClick={() => handleSocialSignIn(signInWithGoogle)}
        >
          <AiFillGoogleCircle className="text-3xl" />
          Log in with Google
        </button>
        <button
          className="btn btn-outline hover:bg-black border-black text-black dark:text-white dark:border-white dark:hover:bg-black"
          onClick={() => handleSocialSignIn(signInWithGithub)}
        >
          <BsGithub className="text-3xl" />
          Log in with Github
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
