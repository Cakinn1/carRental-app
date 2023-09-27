import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./feature/signupSlice";
import authReducer from "./feature/authSlice";
import selectedValuesReducer from "./feature/selectedValueSlice";
export const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth: authReducer,
    selectedValues: selectedValuesReducer,
  },
});
