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
import "./TopCarousel.css";
import { Autoplay, Pagination, Navigation, Parallax } from "swiper/modules";

const TopCarouselDetails = ({ banner }) => {
  return (
    <div>
      <div
        slot="container-start"
        className="parallax-bg"
        data-swiper-parallax="-23%"
      ></div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        scrollbar={{
          hide: true,
        }}
        // navigation={true}
        modules={[Autoplay, Navigation, Parallax]}
        className="mySwiper"
      >
        {Array.isArray(banner) ? (
          banner.map((item) => (
            <div key={item._id}>
              {item.sliderImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    className=""
                    src={image.url}
                    alt={`Slider Image ${index + 1}`}
                    data-swiper-parallax="-300"
                  />
                </SwiperSlide>
              ))}
            </div>
          ))
        ) : (
          <p>No banner data available</p>
        )}
      </Swiper>
    </div>
  );
};

export default TopCarouselDetails;
