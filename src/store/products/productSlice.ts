import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productAPIService from "./action";
import { reset } from "../auth/authSlice";
const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const PRODUCTS_URL = BASE_URL + "/api/v1/products/";
const ORDERS_URL = BASE_URL + "/api/v1/orders/";
import axios from "axios";
const token = localStorage.getItem("peleza-token");
const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    // Authorization: `Bearer ${localStorage.getItem("peleza-token")}`,
  },
};
const initialState = {
  products: [],
  isLoading: true,
};

export const getProducts = createAsyncThunk("products/getAll", async () => {
  try {
    const res = await productAPIService.getproducts();
    console.log("my res", res);
    return res;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    console.log(error);

    return error;

    // return thunkAPI.rejectWithValue(message);
  }
});

export const getProductDetail = createAsyncThunk(
  "product/getdetail",
  async (id: string, thunkAPI) => {
    try {
      console.log(config);
      const res = await axios.get(`${PRODUCTS_URL}${id}`, config);
      console.log(res);
      console.log(thunkAPI);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "product/add",
  async (data: any, thunkAPI) => {
    try {
      const res = await axios.post(`${PRODUCTS_URL}create/`, data, config);
      console.log(res);
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const addToCart = createAsyncThunk(
  "orders/add",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.post(
        `${ORDERS_URL}add-to-cart/${id}/`,
        null,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "orders/remove",
  async (id: string, thunkAPI) => {
    try {
      const res = await axios.patch(
        `${ORDERS_URL}remove-from-cart/${id}/`,
        null,
        config
      );
      return res;
    } catch (error) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
        state.products = [];
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload.results;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state) => {
        state.products = [];
        state.isLoading = false;
      })
      .addCase(getProductDetail.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action);
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addProduct.pending, (state) => {
        state.isLoading = true;
        state.products = [];
      })
      .addCase(addProduct.fulfilled, (state) => {
        console.log(state);
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.products = [];
      })
      .addCase(addToCart.fulfilled, (state) => {
        console.log(state);
        state.isLoading = false;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.isLoading = true;
        state.products = [];
      })
      .addCase(removeFromCart.fulfilled, (state) => {
        console.log(state);
        state.isLoading = false;
      })
      .addCase(removeFromCart.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { reset } = productSlice.actions;
export default productSlice.reducer;
