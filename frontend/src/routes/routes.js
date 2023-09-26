import { createBrowserRouter } from "react-router-dom";

import AddProduct from "../pages/AddProduct";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import { lazy } from 'react';

const Products = lazy(() => import ("../pages/products/Products"));
const EditProduct = lazy(() => import ("../pages/products/EditProduct"));

const routes= createBrowserRouter([
    {
      path: "/",
      element:  <Layout/>,
      children: [
        {
            path: "/",
            index: true,
            element:  <Home/>,
        },
        {
          path: "products",
          element:  <Products/>,

        },{
          path: "products/add",
          element:  <AddProduct/>,
        },{
          path: "products/edit/:id",
          element:  <EditProduct/>
        }
      ]
    },
    
  ]);

  
  export default routes