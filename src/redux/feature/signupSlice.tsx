import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signupModalOpen: false,
  signinModalOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignupModal: (state) => {
      state.signupModalOpen = true;
    },
    closeSignupModal: (state) => {
      state.signupModalOpen = false;
    },
    closeSigninModal: (state) => {
      state.signinModalOpen = false;
    },
    openSigninModal: (state) => {
      state.signinModalOpen = true;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  closeSigninModal,
  openSigninModal,
} = modalSlice.actions;

export default modalSlice.reducer;
