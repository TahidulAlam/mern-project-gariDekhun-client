/* eslint-disable no-unused-vars */
import React from "react";
const Adds = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const image_link = form.image_link.value;
    const car_type = form.car_type.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const shortDescription = form.shortDescription.value;
    const formData = {
      brand,
      name,
      image_link,
      car_type,
      price,
      ratings,
      shortDescription,
    };
    // console.log(formData);
    try {
      const response = await fetch(`http://localhost:5000/allproducts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log(result);
      if (result.insertedId) {
        alert("product added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="w-8/12 mx-auto bg-slate-50 dark:glass p-5 rounded-lg m-4">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                Peoduct Information
              </h2>

              <div className="mt-5 grid grid-cols-1 gap-y-3 sm:grid-cols-6 gap-3">
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
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
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-2"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="shortDescription"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Short Description
                  </label>
                  <textarea
                    name="shortDescription"
                    id="shortDescription"
                    rows={3}
                    className="block w-full rounded-md border-gray-300 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <input
              type="submit"
              className="rounded-md bg-slate-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Adds;
