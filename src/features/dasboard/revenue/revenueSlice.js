import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRevenue } from "./revenueService";

const initialState = {
  revenue: null,
  totalRevenue: null,
  //previous: null,
  isLoading: false,
  isInit: false,
  error: null
};

export const fetchRevenueThunk = createAsyncThunk(
  "/revenue/fetchOrderValue",
  async () => {
    return await fetchRevenue();
  }
);

const revenueSlice = createSlice({
  name: "revenue",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRevenueThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRevenueThunk.fulfilled, (state, action) => {
        console.log("Received revenue", action.payload);
        const { revenue, totalRevenue } = action.payload.data;
        state.revenue = revenue;
        state.totalRevenue = totalRevenue;
        state.isLoading = false;
        state.isInit = true;
      })
      .addCase(fetchRevenueThunk.rejected, (state, action) => {
        console.log("Failed - fetch revenue", action.error.message);
        state.error = action.error.message;
        state.isLoading = false;
      });
  }
});

export const getRevenue = (state) => state.revenue.revenue;
export const getTotalRevenue = (state) => state.revenue.totalRevenue;
export const getError = (state) => state.revenue.error;
export const isLoading = (state) => state.revenue.isLoading;
export const isInitialized = (state) => state.revenue.isInit;
export default revenueSlice.reducer;
