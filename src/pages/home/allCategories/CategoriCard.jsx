/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const CategoriCard = ({ cardData }) => {
  const { logoLink, _id, brand } = cardData || {};

  return (
    <div>
      <Link to={`/home/${_id}`}>
        <div className="card card-compact w-auto dark:bg-slate-800 bg-slate-200 lg:p-5 p-3 lg:h-auto h-36 flex flex-col justify-center items-center">
          <figure className="lg:h-40 h-20">
            <img
              className="lg:w-[150px] w-[70px] p-3"
              // style={{ width: "150px" }}
              src={logoLink}
              alt={brand}
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title justify-center dark:text-white text-black lg:text-2xl text-base font-medium whitespace-nowrap">
              {brand}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriCard;
