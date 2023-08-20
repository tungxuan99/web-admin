import React from "react";
import "./Dashboard.scss";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../common/Sidebar";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard__content">
          <Outlet/>
      </div>
    </div>
  );
};
