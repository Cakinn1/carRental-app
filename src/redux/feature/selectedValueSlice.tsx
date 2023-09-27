import { createSlice } from "@reduxjs/toolkit";
import { SelectedValuesProps } from "../../components/HomeComponents/BookCarComponent/HomeBookCarSelect";

const initialState: SelectedValuesProps[] = [];

const selectedValuesSlice = createSlice({
  name: "selectedValues",
  initialState,
  reducers: {
    updateSelectedValue: (state, action) => {
      const { name, value } = action.payload;
console.log('upodated stat with', name, value)
    return state.map((item) =>
        item.name === name ? { ...item, value } : item
      );
    },
    resetSelectedValues: (state) => {
      return state.map((item) => ({ ...item, value: "" }));
    },
  },
});

export const { updateSelectedValue, resetSelectedValues } =
  selectedValuesSlice.actions;
export default selectedValuesSlice.reducer;
