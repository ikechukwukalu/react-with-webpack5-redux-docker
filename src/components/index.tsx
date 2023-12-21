import React, { Fragment } from "react";
import { RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "./redux/user/index.tsx";
import { assignRouter } from "./routes/web.tsx";
import Header from "./includes/header.tsx";
import Footer from "./includes/footer.tsx";

const Components = () => {
  const loggedUser = useSelector(userSelector);
  const Router = assignRouter(loggedUser);

  return (
    <Fragment>
      {/* <Header /> */}
      <RouterProvider router={Router} />
      {/* <Footer /> */}
    </Fragment>
  );
}

export default Components;
