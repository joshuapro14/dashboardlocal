import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrderValue as getOrderValue } from "./orderValueService";

const initialState = {
  current: null,
  //previous: null,
  isLoading: false,
  isInit: false,
  error: null
};

export const fetchOrderValue = createAsyncThunk(
  "/orderValue/fetchOrderValue",
  async () => {
    return await getOrderValue();
  }
);

const orderValueSlice = createSlice({
  name: "orderValue",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOrderValue.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrderValue.fulfilled, (state, action) => {
        console.log("Received order values", action.payload);
        const { values } = action.payload.data;
        state.current = values;
        state.isLoading = false;
        state.isInit = true;
      })
      .addCase(fetchOrderValue.rejected, (state, action) => {
        console.log("Failed - fetch order values", action.error.message);
        state.error = action.error.message;
        state.isLoading = false;
      });
  }
});

export const getCurrent = (state) => state.orderValue.current;
export const getError = (state) => state.orderValue.error;
export const isLoading = (state) => state.orderValue.isLoading;
export const isInitialized = (state) => state.orderValue.isInit;
export default orderValueSlice.reducer;
