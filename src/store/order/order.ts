import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const ORDERS_URL = BASE_URL + "/api/v1/orders/";
const token = localStorage.getItem("peleza-token");

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer ${localStorage.getItem("peleza-token")}`,
  },
};

const initialState = {
  orders: [],
  isLoading: false,
};

export const getAllOrders = createAsyncThunk("orders/getAll", async () => {
  try {
    const res = await axios.get(ORDERS_URL, config);
    return res.data;
  } catch (error) {
    return error;
  }
});

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllOrders.pending, (state) => {
        state.isLoading = true;
        state.orders = [];
      })
      .addCase(getAllOrders.fulfilled, (state, action) => {
        state.isLoading = true;
        state.orders = action.payload;
        console.log(action.payload);
      })
      .addCase(getAllOrders.rejected, (state) => {
        state.isLoading = true;
        state.orders = [];
      });
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;
