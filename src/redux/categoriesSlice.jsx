import { createSlice } from "@reduxjs/toolkit";

let defaultState = [

  { id: "1", name: "tech", description: "Компьютеры", image: "/img/toolbar/tech_image.svg#icon-fat-2416"},
  { id: "2", name: "monitors", description: "Мониторы", image: "/img/toolbar/monitor.svg#monitor"},
  { id: "3", name: "devices", description: "Смартфоны", image: "/img/toolbar/devices_image.svg#icon-fat-3361"},
  { id: "4", name: "tables", description: "Планшеты", image: "/img/toolbar/ipad.svg#ipad"},

];
const categoriesSlice = createSlice({
  name: "categories",
  initialState: defaultState,
  reducers: {
  
  },
});
export const { setDefaultState } = categoriesSlice.actions;
export default categoriesSlice.reducer;
