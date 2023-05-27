import React, { useEffect } from "react";
import Style from "./sales.module.css";
import SalesCard from "./SalesCard";
import { useSelector, useDispatch } from "react-redux";
import {
  getCustomers,
  getError,
  getKeyAccounts,
  getRetailers,
  isInitialized,
  isLoading
} from "./salesSlice";
import { fetchSales } from "./salesSlice";

/* const data = {
  customers: {
    currentWeek: [4.54, 5.65, 7.45, 6.24, 4.56, 6.56, 7.65],
    currentWeekTotal: 42.65,
    lastWeek: [3.43, 6.41, 4.56, 4.89, 8.8, 7.85, 8.67],
    title: "Customers"
  },
  key_accounts: {
    currentWeek: [7.95, 8.19, 6.92, 1.13, 1.53, 4.22, 6.91],
    currentWeekTotal: 36.85,
    lastWeek: [4.05, 4.3, 9.6, 5.57, 8.83, 8.13, 2.53],
    title: "Key Accounts"
  },
  retailers: {
    currentWeek: [6.8, 6.93, 6.66, 8.44, 6.58, 6.9, 6.09],
    currentWeekTotal: 48.39,
    lastWeek: [2.38, 4.24, 3.91, 4.94, 2.4, 3.72, 3.79],
    title: "Retailers"
  }
}; */

const Sales = () => {
  const dispatch = useDispatch();
  const customers = useSelector(getCustomers);
  const keyAccounts = useSelector(getKeyAccounts);
  const retailers = useSelector(getRetailers);
  const isInit = useSelector(isInitialized);
  const isLoad = useSelector(isLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchSales());
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

  //const { customers, key_accounts, retailers } = data;
  return (
    <div className={Style.sales}>
      <SalesCard {...retailers} />
      <SalesCard {...customers} />
      <SalesCard {...keyAccounts} />
    </div>
  );
};

export default Sales;
