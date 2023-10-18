/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CategoriCard = ({ cardData }) => {
  const { brandName, logoLink, _id } = cardData || {};
  return (
    <div>
      <Link to={`/home/${_id}`}>
        <div className="card card-compact w-auto dark:bg-slate-800 p-5 h-auto">
          <figure className="h-40">
            <img style={{ width: "150px" }} src={logoLink} alt={brandName} />
          </figure>
          <div className="card-body ">
            <h2 className="card-title justify-center dark:text-white text-black text-2xl font-semibold">
              {brandName}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriCard;
