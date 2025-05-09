import {
    createBrowserRouter
  } from "react-router";
import Layout from "./Layouts/Layout";
import Error from "./Pages/Error";
import Home from "./Pages/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <Error></Error>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
        }
      ]
    },
  ]);