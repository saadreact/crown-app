import { createSlice } from '@reduxjs/toolkit'
import { addItemsWithQuantityCheck } from '../cartUtils/cartutil';

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
        state.cartItems = addItemsWithQuantityCheck(state.cartItems,action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleCart, addCartItems } = cartSlice.actions

export const cartReducer =  cartSlice.reducer