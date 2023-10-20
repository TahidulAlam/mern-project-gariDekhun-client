/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import TopCarousel from "./topCarousel/TopCarousel";
import AllICategories from "./allCategories/AllICategories";
import "./Home.css";
const Home = () => {
  const { slider_image, allData, banner } = useLoaderData();
  // console.log(allData);
  // console.log(slider_image);
  // const { url } = banner || {};
  console.log(banner);
  const bannerUrl = banner[0].url;
  return (
    <div>
      <div className="bg-transparent home mt-3">
        {/* <TopCarousel banner={slider_image}></TopCarousel>{" "} */}
        <img
          style={{ height: "520px", width: "100%" }}
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
    </div>
  );
};

export default Home;
