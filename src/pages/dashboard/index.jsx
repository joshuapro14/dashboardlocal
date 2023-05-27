import React from "react";
import Sales from "../../features/dasboard/sales/Sales";
import OrderValue from "../../features/dasboard/orderValue/OrderValue";

import Style from "./dashboard.module.css";
import ActionInfoBar from "./actionInfoBar";
import GreetingsBar from "./greetingsBar";
import Revenue from "../../features/dasboard/revenue/Revenue";

const DashBoard = () => {
  return (
    <div>
      <div className={Style.chartSection}>
        {/* <div className={Style.flexRow}>
          <Calendar />
        </div> */}
        <GreetingsBar />
        <ActionInfoBar />
        <Sales />
        <div className={Style.flexRow}>
          <Revenue />
          <OrderValue />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
