import React from "react";
import Style from "./sales.module.css";

const SalesHeader = ({ title }) => {
  return (
    <div className={Style.salesHeader}>
      <span className={Style.salesTitleBox}>
        <span className={Style.salesTitle}>{title}</span>
        <span className={Style.salesSubTitle}>Sales</span>
      </span>
      <span className={Style.threedots}>...</span>
    </div>
  );
};

export default SalesHeader;
