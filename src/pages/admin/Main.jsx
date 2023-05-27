import React from "react";
import { Outlet } from "react-router-dom";
import Style from "./admin.module.css";
import HeaderBar from "./HeaderBar";

const Main = () => {
  return (
    <span className={Style.main}>
      <HeaderBar />
      <span className={Style.outlet}>
        <Outlet />
      </span>
    </span>
  );
};

export default Main;
