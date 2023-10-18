/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import AddProducts from "../../pages/addProducts/AddProducts";
import Cart from "../../pages/cart/Cart";
import AboutUs from "../../pages/aboutUs/AboutUs";
import fetchData from "../../error/FetchErrorHandle";
import BrandDetails from "../../pages/brandDetails/BrandDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const slider_image = await fetchData(
            "http://localhost:5000/home/slider"
          );
          const allData = await fetchData("http://localhost:5000/home");
          return { slider_image, allData };
        },
      },
      {
        path: "/home/:id",
        element: <BrandDetails></BrandDetails>,
        loader: async ({ params }) => {
          const brand_details = await fetchData(
            `http://localhost:5000/home/${params.id}`
          );
          return { brand_details };
        },
      },
      {
        path: "/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/my-cart",
        element: <Cart></Cart>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
export default Routes;
