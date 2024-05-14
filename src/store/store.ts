import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./cartSlice";
import { useDispatch } from "react-redux";
import authSlice from "./auth/authSlice";
import productSlice from "./products/productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    products: productSlice,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export default store;
