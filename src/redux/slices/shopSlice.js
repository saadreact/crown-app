import { createSlice } from "@reduxjs/toolkit";
import { shopActionTypes } from "../shop/shop.types";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: {},
    isFetching:false,
    errorMessage:""
  },
  reducers: {
    updateShopData: (state, action) => {
      switch (action.payload.type) {
        case shopActionTypes.FETCH_COLLECTIONS_START:
          return {
            ...state,
            isFetching:true
          }
        case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
          return {
            ...state,
            isFetching:false,
            shop: action.payload.payload,
          };
        case shopActionTypes.FETCH_COLLECTIONS_ERROR:
          return{
            isFetching:false,
            errorMessage:action.payload.payload
          }  
        default:
          return state;
      }
    },
  },
});

export const { updateShopData } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;