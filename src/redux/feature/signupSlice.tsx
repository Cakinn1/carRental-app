import { createSlice } from "@reduxjs/toolkit";

export interface ModalRootState {
    signupModalOpen: boolean;
    signinModalOpen: boolean;
    bookCarModalOpen: boolean;
}

const initialState: ModalRootState = {
  signupModalOpen: false,
  signinModalOpen: false,
  bookCarModalOpen: false,
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
    openBookCarModal: (state) => {
      state.bookCarModalOpen = true;
    },
    closeBookCarModal: (state) => {
      state.bookCarModalOpen = false;
    },
  },
});

export const {
  openSignupModal,
  closeSignupModal,
  closeSigninModal,
  openSigninModal,
  closeBookCarModal,
  openBookCarModal,
} = modalSlice.actions;

export default modalSlice.reducer;
