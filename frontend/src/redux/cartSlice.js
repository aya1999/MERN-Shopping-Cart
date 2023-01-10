
import { createSlice } from '@reduxjs/toolkit';


const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item._id === action.payload._id); 
      if (itemInCart) { 
        itemInCart.quantity++; 
      } else {
        state.cart.push({ ...action.payload, quantity: 1});
      }
    },
    removeItem: (state, action) => {
      const removeItem = state.cart.filter((item) => item._id !== action.payload);
      state.cart = removeItem;
    },
  },
});
export const {addToCart, incrementQuantity, decrementQuantity, removeItem} = cartSlice.actions
export const cartReducer = cartSlice.reducer;

