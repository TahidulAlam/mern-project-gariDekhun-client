/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CategoriCard from "./CategoriCard";

const AllICategories = ({ allData }) => {
  console.log(allData);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-2  gap-5 w-[90%] lg:w-[100%] mx-auto">
        {allData.map((data) => (
          <CategoriCard key={data._id} cardData={data}></CategoriCard>
        ))}
      </div>
    </div>
  );
};

export default AllICategories;
