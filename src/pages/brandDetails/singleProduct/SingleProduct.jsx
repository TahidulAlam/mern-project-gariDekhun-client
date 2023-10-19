/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData();
  const loadedData = data.productCardDetails;
  const { brand, car_type, description, image_link, name, price, ratings } =
    loadedData || {};
  const handleCart = async (loadedData) => {
    try {
      const response = await fetch("http://localhost:5000/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ loadedData }),
      });

      const result = await response.json();
      console.log(result);

      if (result.insertedId) {
        alert("Product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className=" glass flex justify-center items-center">
        <h1 className="text-center font-bold p-3 text-4xl text-white">
          {brand}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <img style={{ width: "500px" }} src={image_link} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-5 p-20">
        <div className="flex flex-col justify-center gap-5 text-3xl  text-white">
          <div>
            <h1>Name : {name}</h1>
          </div>
          <div>
            <h1>Type : {car_type}</h1>
          </div>
          <div>
            <h1>Price : {price}</h1>
          </div>
          <div>
            <h1>Ratings : {ratings}</h1>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl text-white">{description}</h1>
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
