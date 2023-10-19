/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ data }) => {
  const { _id, brand, name, image_link, car_type, price, ratings, code } =
    data || {};
  return (
    <div>
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[430px]">
        <div className="h-60">
          {<img className="p-8 rounded-t-lg" src={image_link} alt={name} /> ? (
            <img className="p-8 rounded-t-lg" src={image_link} alt={name} />
          ) : (
            <h1>Plz Update</h1>
          )}
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name} <span className="text-xs">({car_type})</span>
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {ratings}
            </span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {price}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4 mt-1">
            <Link
              to={`/allproducts/details/${_id}`}
              className="text-white w-2/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </Link>
            <Link
              to={`/allproducts/update/${_id}`}
              className="text-white w-2/4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Update
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
