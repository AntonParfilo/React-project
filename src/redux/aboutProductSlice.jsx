import { createSlice } from "@reduxjs/toolkit/";


 const defaultState = [];

  const aboutProductSlice = createSlice({
    name: "aboutProduct",
    initialState: defaultState,
    reducers: {
      setProduct(state, action){
         return action.payload; 
      },
      getProductAction(state, action){

      }
    }
  });

export const { setProduct, getProductAction } = aboutProductSlice.actions;
export default aboutProductSlice.reducer;