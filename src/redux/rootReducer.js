import { combineReducers } from "redux";
import { cartReducer } from "./slices/cartSlice";
import { userReducer } from "./slices/userSlice";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { directoryReducer } from "./slices/directorySlice";
import { shopReducer } from "./slices/shopSlice";

const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'] 
}
export const persistedReducer = persistReducer(persistConfig, rootReducer);
