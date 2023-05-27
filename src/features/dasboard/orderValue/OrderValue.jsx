import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import OrderChart from "./OrderChart";
import {
  fetchOrderValue,
  getCurrent,
  getError,
  isInitialized,
  isLoading
} from "./orderValueSlice";
import Style from "./orderValue.module.css";
import OrderValueInfo from "./OrderValueInfo";

const OrderValue = () => {
  const dispatch = useDispatch();
  const current = useSelector(getCurrent);
  const isInit = useSelector(isInitialized);
  const isLoad = useSelector(isLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchOrderValue());
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
    <div className={Style.orderValueCard}>
      <span className={Style.title}>AVG Order Value</span>
      <OrderValueInfo current={current} />
      <OrderChart current={current} />
    </div>
  );
};

export default OrderValue;
