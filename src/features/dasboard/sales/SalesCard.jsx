import React from "react";
import Style from "./sales.module.css";
import SalesChart from "./SalesChart";
import SalesHeader from "./SalesHeader";
import SalesInfo from "./SalesInfo";

const SalesCard = ({ currentWeek, lastWeek, title }) => {
  return (
    <div className={Style.salesCard}>
      <SalesHeader title={title} />
      <SalesInfo currentWeek={currentWeek} lastWeek={lastWeek} />
      <SalesChart currentWeek={currentWeek} lastWeek={lastWeek} />
    </div>
  );
};

export default SalesCard;
