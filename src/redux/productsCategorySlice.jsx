import { createSlice } from "@reduxjs/toolkit/";

 const defaultState = [];

  const productsCategorySlice = createSlice({
    name: "productsCategory",
    initialState: defaultState,
    reducers: {
      setProductsCategory(state, action){
         return action.payload; 
      },
      getProductsCategoryAction(state, action){},
      getProductsCategoryFiltersAction(state, action){}
    }
  });

export const { setProductsCategory, getProductsCategoryAction, getProductsCategoryFiltersAction } = productsCategorySlice.actions;
export default productsCategorySlice.reducer;