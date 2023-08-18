import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/Register";
import { CreateRequirement } from "./pages/CreateRequirement";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Register />,
  },
  {
    path: "/create-requirement",
    element: <CreateRequirement />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
