import { createSlice } from '@reduxjs/toolkit'
import { addItemsWithQuantityCheck, removeItemFromCart } from '../cartUtils/cartutil';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: false,
    cartItems:[]
  },
  reducers: {
    toggleCart: (state, action) => {
      state.hidden = !state.hidden
    },
    addCartItems: (state, action) =>{
        state.cartItems = addItemsWithQuantityCheck(state.cartItems,action.payload);
    },
    clearItem:(state, action) =>{
      state.cartItems = state.cartItems.filter(item => item.id != action.payload.id);
    },
    removeItem:(state, action) =>{
      state.cartItems = removeItemFromCart(state.cartItems,action.payload);
    }

  }
})

// Action creators are generated for each case reducer function
export const { toggleCart, addCartItems,clearItem,removeItem } = cartSlice.actions

export const cartReducer =  cartSlice.reducer