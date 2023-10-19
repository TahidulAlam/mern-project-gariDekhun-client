/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleItem from "./singleitem/SingleItem";

const Cart = () => {
  const Data = useLoaderData();
  const newData = Data.productCardDetails;
  const [card, setCard] = useState(newData);
  console.log(newData);
  // const { loadedData } = newData || {};
  // console.log(loadedData);
  // console.log(newData);
  // newData.forEach((item, index) => {
  //   const description = item.loadedData.description;
  //   console.log(description);
  // });
  // console.log(description);
  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {card?.map((dd) => (
          <SingleItem
            key={dd._id}
            card={card}
            setCard={setCard}
            data={dd}
          ></SingleItem>
        ))}
      </div>
    </div>
  );
};

export default Cart;
