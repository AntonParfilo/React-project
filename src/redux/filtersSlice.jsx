import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

let defaultState = [];
const filtersSlice = createSlice({
  name: "filters",
  initialState: defaultState,
  reducers: {
    setFiltersCategory(state, action){
      return action.payload;
    },
    getFiltersCategoryAction(state, action){}
  },
});
export const { setFiltersCategory, getFiltersCategoryAction } = filtersSlice.actions;
export default filtersSlice.reducer;
