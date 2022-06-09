import { combineReducers } from "redux";
import { cartReducer } from "./slices/cartSlice";
import { userReducer } from "./slices/userSlice";

export const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer
});
