import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //directly mutating the state here
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      //console.log(current(state))
      // u cannot directly use state in console log of reducer, it will give u a proxy object(go through it once), instead use console.log(current(state)).
    },
  },
});

//here additem is dispatch-action and the function beside it is reducer function. and the reducer function will basically modify the slice of the store. it will get 2 parameters state and action

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
