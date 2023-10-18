/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CategoriCard from "./CategoriCard";

const AllICategories = ({ allData }) => {
  console.log(allData);
  return (
    <div>
      <div className="grid grid-cols-3 gap-5">
        {allData.map((data) => (
          <CategoriCard key={data._id} cardData={data}></CategoriCard>
        ))}
      </div>
    </div>
  );
};

export default AllICategories;
