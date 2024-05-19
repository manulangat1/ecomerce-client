// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(state, action);
    },
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
