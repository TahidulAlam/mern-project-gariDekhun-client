/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
// import fetchData from "../../../error/FetchErrorHandle";

const ProductDetailsCard = ({ params }) => {
  const [loadedData, setLoadedData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:5000/allproducts/${params}`
      );
      const data = await response.json();
      setLoadedData(data);
    }

    fetchData();
  }, [params]);

  // console.log(loadedData);
  return (
    <div>
      <div>
        {/* <h2>Product Details</h2> */}
        <div className="grid grid-cols-3 gap-5 mt-5">
          {loadedData?.map((dd) => (
            <ProductCard key={dd._id} data={dd}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
