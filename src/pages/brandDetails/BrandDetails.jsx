/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import BrandDetailsCard from "./BrandDetailsCard";

const BrandDetails = () => {
  //   console.log(brand_details);
  const brand = useLoaderData();
  //   console.log(brand_details);
  const brand_details = brand.brand_details;
  const { brandName, promotionalBanners, description } = brand_details || {};
  return (
    <div>
      <h1>{brandName}</h1>
    </div>
  );
};

export default BrandDetails;
