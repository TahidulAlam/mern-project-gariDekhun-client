/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductDetailsCard from "./productcard/ProductDetailsCard";
import BannerSlider from "./banner/BannerSlider";

const BrandDetails = () => {
  const brandData = useLoaderData();
  const brand_details = brandData.brand_details;
  const productCardData = brandData.productCard;
  console.log("pd data", productCardData);
  const { _id, brand, promotionalBanners, description, logoLink, products } =
    brand_details || {};

  return (
    <div>
      <div className="glass flex justify-center gap-3 items-center p-3">
        <div>
          <img style={{ width: "80px" }} src={logoLink} alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-4xl text-center dark:text-white text-slate-800">
            {brand}
          </h1>
        </div>
      </div>
      <div>
        <BannerSlider sliderData={promotionalBanners}></BannerSlider>
      </div>
      <div className="">
        <div>
          <ProductDetailsCard params={brand}></ProductDetailsCard>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
