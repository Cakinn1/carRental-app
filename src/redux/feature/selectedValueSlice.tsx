// selectedValuesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SelectedValue {
  name: string;
  value: string;
  image?: string;
}
export interface SelectStateValue {
  selectedValues: {
    values: Array<{
      name: string;
      value: string;
      image?: string;
    }>;
  };
}

export interface SelectedValuesState {
  values: SelectedValue[];
}

const initialState: SelectedValuesState = {
  values: [
    { name: "select1", value: "", image: "" },
    { name: "select2", value: "" },
    { name: "select3", value: "" },
    { name: "select5", value: "" },
  ],
};

const selectedValuesSlice = createSlice({
  name: "selectedValues",
  initialState,
  reducers: {
    updateSelectedValue: (state, action: PayloadAction<SelectedValue>) => {
      const { name, image, value } = action.payload;
      state.values = state.values.map((item) =>
        item.name === name ? { ...item, value, image } : item
      );
    },
  },
});

export const { updateSelectedValue } = selectedValuesSlice.actions;
export default selectedValuesSlice.reducer;
