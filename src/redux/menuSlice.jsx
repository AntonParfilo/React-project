import { createSlice } from "@reduxjs/toolkit/";

 const defaultState = false;

  const menuSlice = createSlice({
    name: "menu",
    initialState: defaultState,
    reducers: {
      setMenu(state, action){
         return action.payload; 
      }
    }
  });

export const { setMenu } = menuSlice.actions;
export default menuSlice.reducer;