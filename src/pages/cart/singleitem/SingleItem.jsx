/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import swal from "sweetalert";

const SingleItem = ({ CardData, card, setCard }) => {
  //   console.log(data);
  //   const [cartDelete, setCartDelete] = useState();
  const newData = CardData.loadedData;
  // console.log(newData);
  const {
    _id,
    brand,
    car_type,
    description,
    image_link,
    name,
    price,
    ratings,
  } = newData || {};
  // const newDes = description.slice(0, 120);
  // console.log(CardData);
  const deleteId = CardData._id;
  console.log(deleteId);
  const handleDelete = (deleteId) => {
    console.log(deleteId);
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this item!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! The item has been deleted!", {
          icon: "success",
        });
        fetch(`http://localhost:5000/cart/${deleteId}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log("Delete successful", data);
            if (data.success === true) {
              const updatedCard = card.filter((item) => item._id !== deleteId);
              setCard(updatedCard);
            }
          });
      } else {
        swal("The item is safe!");
      }
    });
  };

  return (
    <div>
      <div className="card card-side bg-slate-100 rounded-lg h-64 dark:glass">
        <figure className="w-[50%]">
          <img src={image_link} alt={name} />
        </figure>
        <div className="card-body w-[50%]">
          <h2 className="card-title dark:text-white text-black text-2xl">
            {name}
          </h2>
          <p className=" dark:text-white text-black">{price}</p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleDelete(deleteId)}
              className="btn btn-outline dark:bg-white dark:text-black"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
