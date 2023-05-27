import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchRevenueThunk as fetchRevenue,
  getRevenue,
  getTotalRevenue,
  getError,
  isInitialized,
  isLoading
} from "./revenueSlice";
import Style from "./revenue.module.css";
import RevenueChart from "./RevenueChart";

const Revenue = () => {
  const dispatch = useDispatch();
  const revenue = useSelector(getRevenue);
  const totalRevenue = useSelector(getTotalRevenue);
  const isInit = useSelector(isInitialized);
  const isLoad = useSelector(isLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchRevenue());
  }, []);

  if (!isInit) {
    return <div className={Style.sales}>Initializing; please Wait</div>;
  }

  if (isLoad) {
    return <div className={Style.sales}>Loading; please Wait</div>;
  }

  if (error != null) {
    return <div className={Style.sales}>Error: {error}</div>;
  }

  return (
    <div className={Style.revenueCard}>
      <span className={Style.title}>Direct VS Indirect</span>
      <RevenueChart revenue={revenue} totalRevenue={totalRevenue} />
    </div>
  );
};

export default Revenue;
