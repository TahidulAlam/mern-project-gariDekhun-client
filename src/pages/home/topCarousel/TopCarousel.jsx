/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import TopCarouselDetails from "./TopCarouselDetails/TopCarouselDetails";

const TopCarousel = ({ banner }) => {
  return (
    <div>
      <TopCarouselDetails banner={banner}></TopCarouselDetails>
    </div>
  );
};

export default TopCarousel;
