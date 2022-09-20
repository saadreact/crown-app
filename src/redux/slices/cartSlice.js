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
      
      switch (action.payload.type) {
        case "TOGGLE_CART":
          state.hidden = !state.hidden;
          break;
          case "ADD_TO_CART":
            state.cartItems = addItemsWithQuantityCheck(state.cartItems,action.payload.payload);
            break;
            case "REMOVE_FROM_CART":
              state.cartItems = removeItemFromCart(state.cartItems,action.payload.payload);
              break;
              case "CLEAR_ITEM_FROM_CART":
                state.cartItems = state.cartItems.filter(item => item.id != action.payload.payload.id);
                break;  
      
        default:
          return state;
      }
    },
    // addCartItems: (state, action) =>{
    //     state.cartItems = addItemsWithQuantityCheck(state.cartItems,action.payload.payload);
    // },
    // clearItem:(state, action) =>{
    //   state.cartItems = state.cartItems.filter(item => item.id != action.payload.payload.id);
    // },
    // removeItem:(state, action) =>{
    //   state.cartItems = removeItemFromCart(state.cartItems,action.payload.payload);
    // }

  }
})

// Action creators are generated for each case reducer function
export const { toggleCart, addCartItems,clearItem,removeItem } = cartSlice.actions

export const cartReducer =  cartSlice.reducer