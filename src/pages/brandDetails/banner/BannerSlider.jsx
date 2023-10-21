/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BannerSlider = ({ sliderData }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* {sliderData?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))} */}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
        {sliderData === null ? (
          <div>Loading...</div>
        ) : sliderData.length === 0 ? (
          <div className="m-20  grid grid-cols-1">
            <h1 className="p-56  font-bold text-center text-5xl">
              Products Availabele soon...
            </h1>
          </div>
        ) : (
          sliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="" />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </>
  );
};

export default BannerSlider;
