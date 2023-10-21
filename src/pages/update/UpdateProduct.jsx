/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
  const oldData = useLoaderData();
  const loadedData = oldData.productDataUpdate;
  const {
    _id,
    brand,
    car_type,
    description,
    image_link,
    name,
    price,
    ratings,
  } = loadedData || {};
  const handleUpdateData = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const image_link = form.image_link.value;
    const car_type = form.car_type.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const description = form.description.value;
    const formUpdateData = {
      brand,
      name,
      image_link,
      car_type,
      price,
      ratings,
      description,
    };
    try {
      const response = await fetch(
        `http://localhost:5000/allproducts/update/${loadedData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formUpdateData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.modifiedCount === 1) {
          swal("Product updated");
        }
      } else {
        console.error("Request failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdateData}>
        <div className="space-y-12  bg-slate-200 p-10 pb-0 dark:bg-transparent">
          <div className="border-b border-gray-900/10 pb-5">
            <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
              Information
            </h2>

            <div className="mt-5 grid grid-cols-1 gap-y-3 sm:grid-cols-6 gap-3 dark:text-white">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  defaultValue={name}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="image"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="image_link"
                  id="image"
                  defaultValue={image_link}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Brand Name
                </label>
                <select
                  name="brand"
                  placeholder="select brand"
                  id="type"
                  defaultValue={brand}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                >
                  <option value="Ford">Ford</option>
                  <option value="Toyota">Toyota</option>
                  <option value="BMW">BMW</option>
                  <option value="Mercedes-Benz">Mercedes</option>
                  <option value="Hyundai">Hyundai</option>
                  <option value="Tesla">Tesla</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Type
                </label>
                <select
                  placeholder="select type"
                  name="car_type"
                  id="type"
                  defaultValue={car_type}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                >
                  <option value="coupe">Coupe</option>
                  <option value="convertible">Convertible</option>
                  <option value="suv">SUV</option>
                  <option value="sports">Sports car</option>
                  <option value="crossover">Crossover</option>
                  <option value="minivan">Minivan</option>
                  <option value="sedan">Sedan</option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  defaultValue={price}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="rating"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rating
                </label>
                <input
                  type="number"
                  name="ratings"
                  id="rating"
                  min="0"
                  max="5"
                  step="0.1"
                  defaultValue={ratings}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Short Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  defaultValue={description}
                  className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-end px-10 pb-20 dark:text-white">
          <input
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
