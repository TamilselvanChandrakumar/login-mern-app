import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
  user: null,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    register_success: (state, action) => {
      state.isLoggedin = true;
    },
    register_failure: (state, action) => {
      state.isLoggedin = false;
    },
    login_success: (state, action) => {
      state.isLoggedin = true;
      state.user = action.payload;
    },
    login_fail: (state, action) => {
      state.isLoggedin = false;
      state.user = null;
    },
    logout: (state, action) => {
      state.isLoggedin = false;
      state.user = null;
    },
  },
});

export default loginSlice.reducer;
export const { register_success } = loginSlice.actions;
