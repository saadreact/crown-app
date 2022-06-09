import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    hidden: false
  },
  reducers: {
    toggleCart: (state, action) => {
      state.hidden = !state.hidden
    }
  }
})

// Action creators are generated for each case reducer function
export const { toggleCart } = cartSlice.actions

export const cartReducer =  cartSlice.reducer