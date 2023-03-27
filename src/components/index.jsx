import React, { Fragment } from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import Header from "./includes/header.jsx";
import Footer from "./includes/footer.jsx";

import Home from "./pages/home.jsx";
import Blank from "./pages/blank.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [],
  },
  {
    path: "/blank",
    element: <Blank />,
    children: [],
  },
]);

const Components = () => {
  return (
    <Fragment>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </Fragment>
  );
}

export default Components;
