// /* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const SingleProduct = () => {
  const data = useLoaderData();
  const loadedData = data.productCardDetails;
  const { user } = useAuth();
  const { brand, car_type, description, image_link, name, price, ratings } =
    loadedData || {};

  const handleCart = async (loadedData) => {
    const id = user.uid;
    try {
      const response = await fetch(
        "https://gari-dekhun-backend-lus7ki2wk-tahidulalam.vercel.app/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ loadedData, id }),
        }
      );

      if (!response.ok) {
        console.error("Request failed:", response.status, response.statusText);
      } else {
        const result = await response.json();
        if (result.insertedId) {
          swal("Product added");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" dark:glass flex justify-center items-center bg-slate-100 mt-5">
        <h1 className="text-center font-bold p-3 text-4xl dark:text-white text-gray-900 b ">
          {brand}
        </h1>
      </div>
      <div className="flex justify-center items-center m-10">
        <img style={{ width: "500px" }} src={image_link} alt="" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-20 bg-slate-100 dark:glass mt-10 rounded-lg">
        <div className="flex flex-col justify-center gap-5 text-3xl  text-white">
          <div>
            <h1 className="dark:text-white text-slate-800 font-semibold">
              {name}
            </h1>
          </div>
          <div>
            <h1 className="dark:text-white text-slate-800">
              Type : {car_type}
            </h1>
          </div>
          <div>
            <h1 className="dark:text-white text-slate-800">Price : {price}</h1>
          </div>
          <div>
            <h1 className="dark:text-white text-slate-800">
              Ratings : {ratings}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl dark:text-white text-slate-800">
            {description}
          </h1>
          <button
            onClick={() => handleCart(loadedData)}
            className="btn btn-outline bg-white"
          >
            {" "}
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
