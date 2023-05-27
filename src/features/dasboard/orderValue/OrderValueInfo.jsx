import React from "react";
import { ValueBadge } from "../../../components/badges/ValueBadge";
import { getAverageFromArray } from "../../../utility";
import Style from "./orderValue.module.css";

const OrderValueInfo = ({ current, previous }) => {
  const currentAvg = getAverageFromArray(current);
  const prevAvg = getAverageFromArray(previous);
  const diff = currentAvg - prevAvg;
  const changePercent = prevAvg !== 0 ? (diff * 100) / Math.abs(prevAvg) : null;

  return (
    <span className={Style.orderValueInfo}>
      <ValueBadge percent={changePercent} value={currentAvg} />
    </span>
  );
};

export default OrderValueInfo;
