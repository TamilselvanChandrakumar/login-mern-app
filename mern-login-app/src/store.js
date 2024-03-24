import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/loginslice.js";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
