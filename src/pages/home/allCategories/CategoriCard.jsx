/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CategoriCard = ({ cardData }) => {
  const { logoLink, _id, brand } = cardData || {};

  return (
    <div>
      <Link to={`/home/${_id}`}>
        <div className="card card-compact w-auto dark:bg-slate-800 bg-slate-100 p-5 h-auto">
          <figure className="lg:h-40 h-28">
            <img
              className="lg:w-[150px] w-[100px]"
              // style={{ width: "150px" }}
              src={logoLink}
              alt={brand}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title justify-center dark:text-white text-black text-2xl font-medium">
              {brand}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriCard;
