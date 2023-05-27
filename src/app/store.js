import { combineReducers, configureStore } from "@reduxjs/toolkit";
import salesReducer from "../features/dasboard/sales/salesSlice"; //"../features/dashboard/sales/salesSlice";
import orderValueReducer from "../features/dasboard/orderValue/orderValueSlice";
import revenueReducer from "../features/dasboard/revenue/revenueSlice";

const rootReducer = combineReducers({
  sales: salesReducer,
  orderValue: orderValueReducer,
  revenue: revenueReducer
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  });
};

export const store = setupStore({});
