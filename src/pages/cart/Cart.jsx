/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./singleitem/SingleItem";

const Cart = () => {
  const Data = useLoaderData();
  const newData = Data.productCardDetails;
  // console.log(newData._id);
  const [card, setCard] = useState(newData);
  // console.log(newData);
  return (
    <div>
      <div className="mt-5">
        <div className="grid grid-cols-2 gap-5 ">
          {card?.map((dd) => (
            <SingleItem
              key={dd._id}
              card={card}
              setCard={setCard}
              CardData={dd}
            ></SingleItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
