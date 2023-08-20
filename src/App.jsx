import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "./pages/Register";
import { CreateRequirement } from "./pages/CreateRequirement";
import { Dashboard } from "./pages/Dashboard";
import { History } from "./pages/History";
import { Referrals } from "./pages/Referrals";
import { DetailHistory } from "./pages/DetailHistory";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/create-requirement",
        element: <CreateRequirement />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/history-detail",
        element: <DetailHistory />,
      },
      {
        path: "/referrals",
        element: <Referrals />,
      },
    ]
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
