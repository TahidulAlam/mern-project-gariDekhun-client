/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import TopCarousel from "./topCarousel/TopCarousel";
import AllICategories from "./allCategories/AllICategories";

const Home = () => {
  const { slider_image, allData } = useLoaderData();
  console.log(allData);
  console.log(slider_image);
  return (
    <div>
      <div>
        <TopCarousel banner={slider_image}></TopCarousel>{" "}
      </div>
      <div className="mt-24">
        <div>
          <h1 className="text-center font-semibold text-4xl text-white p-10">
            All Categories
          </h1>
        </div>
        <AllICategories allData={allData}></AllICategories>
      </div>
    </div>
  );
};

export default Home;
