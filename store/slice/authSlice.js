import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userMeta: {},
  token: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.userMeta = action.payload.userMeta;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userMeta = {};
      state.token = "";
    },
  },
});

export const { setAuthUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const authSliceSelector = (state) => state.auth;
