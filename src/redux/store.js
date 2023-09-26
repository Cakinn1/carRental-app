import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./feature/signupSlice";
import authReducer from "./feature/authSlice"
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer
  },
});
