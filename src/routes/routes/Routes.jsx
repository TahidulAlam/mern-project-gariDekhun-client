/* eslint-disable no-unused-vars */

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/home/Home";
import AddProducts from "../../pages/addProducts/AddProducts";
import Cart from "../../pages/cart/Cart";
import AboutUs from "../../pages/aboutUs/AboutUs";
import BrandDetails from "../../pages/brandDetails/BrandDetails";
import ProductDetailsCard from "../../pages/brandDetails/productcard/ProductDetailsCard";
import UpdateProduct from "../../pages/update/UpdateProduct";
import SingleProduct from "../../pages/brandDetails/singleProduct/SingleProduct";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../../error/ErrorPage";
import CartDetails from "../../pages/cart/CartDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const slider_image = await fetch(
              "http://localhost:5000/home/slider"
            ).then((response) => response.json());
            const banner = await fetch("http://localhost:5000/banner").then(
              (response) => response.json()
            );
            const allData = await fetch("http://localhost:5000/home").then(
              (response) => response.json()
            );
            return { slider_image, allData, banner };
          } catch (error) {
            console.error("Error loading data:", error);
            return {};
          }
        },
      },
      {
        path: "/home/:id",
        element: <BrandDetails></BrandDetails>,
        loader: async ({ params }) => {
          try {
            const brand_details = await fetch(
              `http://localhost:5000/home/${params.id}`
            ).then((response) => response.json());
            return { brand_details };
          } catch (error) {
            console.error("Error loading data:", error);
            return {};
          }
        },
      },
      {
        path: "/allproducts/:brand",
        element: <ProductDetailsCard></ProductDetailsCard>,
      },
      {
        path: "/add-products",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
        loader: async () => {
          try {
            const productCardDetails = await fetch(
              "http://localhost:5000/cart"
            ).then((response) => response.json());
            return { productCardDetails };
          } catch (error) {
            console.error("Error loading data:", error);
            return { error: "Failed to load data" };
          }
        },
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/allproducts/details/:id",
        element: (
          <PrivateRoute>
            <SingleProduct></SingleProduct>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const productCardDetails = await fetch(
              `http://localhost:5000/allproducts/details/${params.id}`
            ).then((response) => response.json());
            return { productCardDetails };
          } catch (error) {
            console.error("Error loading data:", error);
            return {};
          }
        },
      },
      {
        path: "/allproducts/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProduct></UpdateProduct>,
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const productDataUpdate = await fetch(
              `http://localhost:5000/allproducts/update/${params.id}`
            ).then((response) => response.json());
            return { productDataUpdate };
          } catch (error) {
            console.error("Error loading data:", error);
            return {};
          }
        },
      },
    ],
  },
]);

export default Routes;
