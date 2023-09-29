import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Auth = {
  uid: string | null;
  email: string | null;
};

const initialState: Auth = {
  uid: null,
  email: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Auth>) => {
      state.uid = action.payload.uid
      state.email = action.payload.email
    },
    clearUser: (state) => {
      state.uid = null;
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
