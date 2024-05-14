// const { createSlice } = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      console.log(state, action);
      //   state.push(action.payload);
    },
    // delete: {},
  },
});

export const { add } = cartSlice.actions;

export default cartSlice.reducer;
