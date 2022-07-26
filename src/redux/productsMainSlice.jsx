import { createSlice } from "@reduxjs/toolkit/";

 const defaultState = {
  products: []
 };

  const productsMainSlice = createSlice({
    name: "productsMain",
    initialState: defaultState,
    reducers: {
      setDefaultState(state, action){
         return action.payload; 
      },
      getProductsMainAction(state, action){},
    }
  });

export const { setDefaultState, getProductsMainAction } = productsMainSlice.actions;
export default productsMainSlice.reducer;