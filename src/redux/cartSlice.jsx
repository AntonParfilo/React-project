import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";


const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
        const go = ()=>{
            state.push(action.payload);
            localStorage.setItem("Cart", JSON.stringify(state));
        }
        let res = state.find( el => el.id === action.payload.id);
        res? console.log("уже в корзине") : go();
    },
    checkCart(state, action) {
      if (localStorage.getItem("Cart")) {
        return JSON.parse(localStorage.getItem("Cart"));
      }
    },
    removeItem(state, action) {
      let itemLocal = JSON.parse(localStorage.getItem("Cart"));
      itemLocal = itemLocal.filter((el) => {
        if (el.id === action.payload) {
        } else return el;
      });
      localStorage.setItem("Cart", JSON.stringify(itemLocal));
      return itemLocal;
    },
    clear(){
      localStorage.removeItem("Cart");
      return [];
    },
    sendOrderAction(state, action) {},
    setQuantity(state, action) {
      state.map((el) => {
        if (action.payload.id === el.id) {
          if (action.payload.operator === "+") {
            el.quantity++;
          } else {
            el.quantity--;
          }
        }
        return el;
      });
      localStorage.setItem("Cart", JSON.stringify(state));
      return state;
    },
  },
});
export const { checkCart, addToCart, removeItem, sendOrderAction, setQuantity, clear } = cartSlice.actions;
export default cartSlice.reducer;
