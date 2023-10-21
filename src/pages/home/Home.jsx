/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import CountUp from "react-countup";
import { AiOutlineFieldTime } from "react-icons/ai";
// import TopCarousel from "./topCarousel/TopCarousel";
import AllICategories from "./allCategories/AllICategories";
import useAuth from "../../hooks/useAuth";
const Home = () => {
  const { slider_image, allData, banner } = useLoaderData();
  const { user } = useAuth();
  const bannerUrl = banner[0].url;
  const bannerTitle = banner[0].title;
  const bannerDes = banner[0].Description;
  return (
    <div>
      <div className="bg-transparent home mt-3">
        <img
          className="lg:h-[520px] h-auto w-[100%] object-cover rounded-lg"
          src={bannerUrl}
          alt=""
        />
      </div>
      <div className="mt-2">
        <div>
          <h1 className="text-center font-semibold text-4xl dark:text-white text-black p-10">
            All Categories
          </h1>
        </div>
        <AllICategories allData={allData}></AllICategories>
      </div>
      <div>
        <div className="mt-10">
          <div className="flex justify-center items-center p-10">
            {/* <AiOutlineFieldTime className=" lg:text-6xl text-4xl text-slate-800 dark:text-white" /> */}
            <a className="font-semibold lg:text-3xl text-xl text-slate-800 dark:text-white backdrop-filter">
              Gari Dekhun Impression
            </a>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 text-5xl gap-5">
            <div className="flex justify-center items-center dark:bg-slate-800 bg-slate-100 p-16 rounded-lg flex-col gap-5">
              <h1 className="text-lg dark:text-white text-slate-950">
                Total Product
              </h1>
              <div>
                <CountUp
                  className=" dark:text-white text-slate-950"
                  start={6285}
                  end={9850}
                  duration={3}
                ></CountUp>
                <span className=" dark:text-white text-slate-950">+</span>{" "}
              </div>
            </div>
            <div className="flex justify-center items-center dark:bg-slate-800 bg-slate-100 p-16 rounded-lg flex-col gap-5">
              <h1 className="text-lg  dark:text-white text-slate-950">
                Total sell
              </h1>
              <div>
                <CountUp
                  className=" dark:text-white text-slate-950"
                  start={5600}
                  end={7050}
                  duration={3}
                ></CountUp>
                <span className=" dark:text-white text-slate-950">+</span>{" "}
              </div>
            </div>
            <div className="flex justify-center items-center dark:bg-slate-800 bg-slate-100 p-16 rounded-lg flex-col gap-5">
              <h1 className="text-lg  dark:text-white text-slate-950">
                Total Partner
              </h1>
              <div>
                <CountUp
                  className=" dark:text-white text-slate-950"
                  start={200}
                  end={350}
                  duration={3}
                ></CountUp>
                <span className=" dark:text-white text-slate-950">+</span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mb-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 py-10 px-5 dark:bg-slate-800 bg-slate-100 rounded-lg">
            <div>
              <img
                className="object-cover rounded-lg mx-auto"
                src={bannerUrl}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-3xl font-semibold  dark:text-white text-slate-950">
                {bannerTitle}
              </h1>
              <h1 className=" dark:text-white text-slate-950">
                {bannerDes.slice(0, 200)}...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
