import React from "react";
import {
  createHashRouter,
  Navigate,
} from "react-router-dom";
import NotFound from "../helpers/not-found.tsx"
import Blank from "../pages/auth/blank.tsx";
import ForgetPassword from "../pages/no-auth/forgot-password.tsx";
import Home from "../pages/auth/home.tsx";
import Login from "../pages/no-auth/login.tsx";
import Register from "../pages/no-auth/register.tsx";
import Welcome from "../pages/no-auth/welcome.tsx";
import ChangePassword from "../pages/auth/change-password.tsx";
import EditProfile from "../pages/auth/edit-profile.tsx";


export const noAuthRouter = createHashRouter([
  {
    path: "/",
    element: <Welcome />,
    children: [],
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Login />,
    children: [],
  },
  {
    path: "/register",
    element: <Register />,
    children: [],
  },
  {
    path: "/password/reset",
    element: <ForgetPassword />,
    children: [],
  },
])

export const authRouter = createHashRouter([
  {
    path: "/",
    element: <Welcome />,
    children: [],
    errorElement: <NotFound />
  },
  {
    path: "/login",
    element: <Navigate to="/home" replace />,
    children: [],
  },
  {
    path: "/register",
    element: <Navigate to="/home" replace />,
    children: [],
  },
  {
    path: "/password/reset",
    element: <Navigate to="/home" replace />,
    children: [],
  },
  {
    path: "/home",
    element: <Home />,
    children: [],
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
    children: [],
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
    children: [],
  },
  {
    path: "/blank",
    element: <Blank />,
    children: [],
  },
]);

export const assignRouter = (user: object) => Object.keys(user).length < 1 ? noAuthRouter : authRouter;