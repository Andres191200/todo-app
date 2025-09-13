import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="layoutScreen">
      <Outlet />
    </div>
  );
}