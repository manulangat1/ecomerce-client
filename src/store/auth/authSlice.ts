import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPIService from "./actions";
const initialState = {
  isAuthenticated: false,
  token: null,
  isLoading: false,
  user: {},
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData: any, thunkAPI) => {
    try {
      return await authAPIService.register(userData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData: any, thunkAPI) => {
    try {
      const res = await authAPIService.login(userData);
      console.log(res, "out");
      localStorage.setItem("peleza-token", res.access);
      return res;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getProfile = createAsyncThunk("auth/profile", async () => {
  try {
    return await authAPIService.profile();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();

    return message;

    // return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        console.log(action.payload.access, "here");
        state.isLoading = false;
        state.token = action.payload.access;
        state.isAuthenticated = action.payload.access ? true : false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        console.log(action);
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action);
        // state.user = action.payload.user;
        // (state.isLoading = false), (state.token = action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        console.log(action);
      })
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
        // state.token = localStorage.getItem("token")
        //   ? localStorage.getItem("token")
        //   : null;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isAuthenticated = action.payload.profile ? true : false;
        state.isLoading = false;
        // state.isError = false;
        state.user = action.payload;
        // state.user = action.payload;

        console.log("this is fulfilled", action.payload);
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isAuthenticated = false;
        console.log(action, state);
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
