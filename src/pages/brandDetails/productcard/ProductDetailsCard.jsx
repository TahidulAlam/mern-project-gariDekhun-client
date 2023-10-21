/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback } from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const ProductDetailsCard = ({ params }) => {
  const [loadedData, setLoadedData] = useState(null);
  console.log("pd", loadedData);
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

  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5 w-[90%] mx-auto">
        {loadedData === null ? (
          <div>Loading...</div>
        ) : loadedData.length === 0 ? (
          ""
        ) : (
          loadedData.map((dd) => (
            <ProductCard key={dd._id} data={dd}></ProductCard>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductDetailsCard;

// {loadedData?.map((dd) => (
//   <ProductCard key={dd._id} data={dd}></ProductCard>
// ))}
