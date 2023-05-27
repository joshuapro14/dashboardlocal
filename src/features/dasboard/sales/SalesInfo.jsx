import React from "react";
import { ValueBadge } from "../../../components/badges/ValueBadge";
import Style from "./sales.module.css";

const getTotal = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const SalesInfo = ({ currentWeek, lastWeek }) => {
  const currentWeekTotal = getTotal(currentWeek);
  const lastWeekTotal = getTotal(lastWeek);
  const diff = currentWeekTotal - lastWeekTotal;
  const changePercent =
    lastWeekTotal !== 0 ? (diff * 100) / Math.abs(lastWeekTotal) : null;
  return (
    <span className={Style.salesInfo}>
      <ValueBadge percent={changePercent} value={currentWeekTotal} />
    </span>
  );
};

export default SalesInfo;
