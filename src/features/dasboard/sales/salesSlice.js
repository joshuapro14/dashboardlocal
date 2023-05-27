import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSales as getSales } from "./salesService";

const initialState = {
  customers: null,
  key_accounts: null,
  retailers: null,
  isLoading: false,
  isInit: false,
  error: null
};

export const fetchSales = createAsyncThunk("/sales/fetchSales", async () => {
  return await getSales();
});

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSales.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchSales.fulfilled, (state, action) => {
        console.log("Received sales", action.payload);
        const { customers, key_accounts, retailers } = action.payload.data;
        state.customers = customers;
        state.key_accounts = key_accounts;
        state.retailers = retailers;
        state.isLoading = false;
        state.isInit = true;
      })
      .addCase(fetchSales.rejected, (state, action) => {
        console.log("Failed - fetch Sales", action.error.message);
        state.error = action.error.message;
        state.isLoading = false;
      });
  }
});

export const getCustomers = (state) => state.sales.customers;
export const getKeyAccounts = (state) => state.sales.key_accounts;
export const getRetailers = (state) => state.sales.retailers;
export const getError = (state) => state.sales.error;
export const isLoading = (state) => state.sales.isLoading;
export const isInitialized = (state) => state.sales.isInit;
export default salesSlice.reducer;
