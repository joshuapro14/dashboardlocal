import React from "react";
import Style from "./admin.module.css";
import Main from "./Main";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className={Style.pageContainer}>
      <SideBar />
      <Main />
      {/* <span className={Style.sideBar}></span>
      <span className={Style.main}>
        <span className={Style.navBar}></span>
        <span className={Style.outlet}></span>
      </span> */}
    </div>
  );
};

export default Home;
