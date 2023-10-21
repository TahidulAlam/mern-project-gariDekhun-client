/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import SingleItem from "./singleitem/SingleItem";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router-dom";

const CartDetails = () => {
  const data = useLoaderData();
  const productCardDetails = data.productCardDetails;
  const [filteredCard, setFilteredCard] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const selectedUid = user.uid;

  useEffect(() => {
    if (selectedUid) {
      try {
        const filteredItems = productCardDetails.filter(
          (item) => item.id === selectedUid
        );
        setFilteredCard(filteredItems);
      } catch (error) {
        setError(error.message);
      }
    } else {
      setFilteredCard([]);
    }
  }, [selectedUid, productCardDetails]);

  const handleDelete = (deleteId) => {
    const updatedCard = filteredCard.filter((item) => item._id !== deleteId);
    setFilteredCard(updatedCard);
  };

  return (
    <div>
      <div className="mt-5">
        {filteredCard.length === 0 ? (
          <p className="text-3xl text-center dark:text-white text-black m-20 font-bold p-20">
            Cart is empty
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            {filteredCard?.map((item) => (
              <SingleItem
                key={item._id}
                CardData={item}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
