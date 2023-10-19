/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
// import swal from "sweetalert";

const SingleItem = ({ data, card, setCard }) => {
  //   console.log(data);
  //   const [cartDelete, setCartDelete] = useState();
  const newData = data.loadedData;
  //   console.log(newData);
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
  const handleDelete = (_id) => {
    // swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   icon: "warning",
    //   buttons: true,
    //   dangerMode: true,
    // }).then((willDelete) => {
    //   if (willDelete) {
    //     swal("Poof! Your imaginary file has been deleted!", {
    //       icon: "success",
    //     });
    fetch(`http://localhost:5000/cart/${_id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        const remaining = card?.filter((blog) => blog._id !== _id);
        setCard(remaining);
        // console.log("delete successfully", data);
        // if (data.deletedCount > 0) {
        //   console.log(data, _id);
        //   const remaining = blogs?.filter((blog) => blog._id !== _id);
        //   setBlogs(remaining);
        //   alert("deleted");
        // }
      });
    // const remaining = cartDelete?.filter((blog) => blog._id !== _id);
    // setCartDelete(remaining);
    //   } else {
    //     swal("Your imaginary file is safe!");
    //   }
    // });
    // console.log(`delete btn worked, ${_id}`);
  };
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl h-64">
        <figure>
          <img src={image_link} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
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
