// /* eslint-disable no-unused-vars */
// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Main from "../../layout/Main";
// import Home from "../../pages/home/Home";
// import AddProducts from "../../pages/addProducts/AddProducts";
// import Cart from "../../pages/cart/Cart";
// import AboutUs from "../../pages/aboutUs/AboutUs";
// import fetchData from "../../error/FetchErrorHandle";
// import BrandDetails from "../../pages/brandDetails/BrandDetails";
// import ProductDetailsCard from "../../pages/brandDetails/productcard/ProductDetailsCard";
// import UpdateProduct from "../../pages/update/UpdateProduct";
// import SingleProduct from "../../pages/brandDetails/singleProduct/SingleProduct";

// const Routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: async () => {
//           const slider_image = await fetchData(
//             "http://localhost:5000/home/slider"
//           );
//           const allData = await fetchData("http://localhost:5000/home");
//           return { slider_image, allData };
//         },
//       },
//       {
//         path: "/home/:id",
//         element: <BrandDetails></BrandDetails>,
//         loader: async ({ params }) => {
//           const brand_details = await fetchData(
//             `http://localhost:5000/home/${params.id}`
//           );
//           // const productCard = await fetchData(
//           //   `http://localhost:5000/allproducts/${params.brand}`
//           // );
//           return { brand_details };
//         },
//       },
//       {
//         path: "/allproducts/:brand",
//         element: <ProductDetailsCard></ProductDetailsCard>,
//         // loader: async ({ params }) => {
//         //   const productCard = await fetchData(
//         //     `http://localhost:5000/allproducts/${params.brand}`
//         //   );
//         //   return { productCard };
//         // },
//       },
//       {
//         path: "/add-products",
//         element: <AddProducts></AddProducts>,
//       },
//       {
//         path: "/my-cart",
//         element: <Cart></Cart>,
//       },
//       {
//         path: "/about-us",
//         element: <AboutUs></AboutUs>,
//       },
//       {
//         path: "/allproducts/details/:id",
//         element: <SingleProduct></SingleProduct>,
//         loader: async ({ params }) => {
//           const productCardDetails = await fetchData(
//             `http://localhost:5000/allproducts/${params.id}`
//           );
//           return { productCardDetails };
//         },
//       },
//       {
//         path: "/allproducts/update/:id",
//         element: <UpdateProduct></UpdateProduct>,
//         loader: async ({ params }) => {
//           const productDataUpdate = await fetchData(
//             `http://localhost:5000/allproducts/${params.id}`
//           );
//           return { productDataUpdate };
//         },
//       },
//     ],
//   },
// ]);
// export default Routes;

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
import ProductDetailsCard from "../../pages/brandDetails/productcard/ProductDetailsCard";
import UpdateProduct from "../../pages/update/UpdateProduct";
import SingleProduct from "../../pages/brandDetails/singleProduct/SingleProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          try {
            const slider_image = await fetchData(
              "http://localhost:5000/home/slider"
            );
            const allData = await fetchData("http://localhost:5000/home");
            return { slider_image, allData };
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
            const brand_details = await fetchData(
              `http://localhost:5000/home/${params.id}`
            );
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
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/my-cart",
        element: <Cart />,
        loader: async () => {
          try {
            const productCardDetails = await fetchData(
              `http://localhost:5000/cart`
            );
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
        path: "/allproducts/details/:id",
        element: <SingleProduct></SingleProduct>,
        loader: async ({ params }) => {
          try {
            const productCardDetails = await fetchData(
              `http://localhost:5000/allproducts/details/${params.id}`
            );
            return { productCardDetails };
          } catch (error) {
            console.error("Error loading data:", error);
            return {};
          }
        },
      },
      {
        path: "/allproducts/update/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: async ({ params }) => {
          try {
            const productDataUpdate = await fetchData(
              `http://localhost:5000/allproducts/update/${params.id}`
            );
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
