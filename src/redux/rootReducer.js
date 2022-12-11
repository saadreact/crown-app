import { combineReducers } from "redux";
import { cartReducer } from "./slices/cartSlice";
import { userReducer } from "./slices/userSlice";
import { persistReducer } from 'redux-persist';
import { directoryReducer } from "./slices/directorySlice";
import { shopReducer } from "./slices/shopSlice";
import storageSession from 'redux-persist/lib/storage/session'


const rootReducer = combineReducers({
  user: userReducer,
  cart:cartReducer,
  directory:directoryReducer,
  shop:shopReducer
});

const persistConfig = {
  key: 'root',
  storage:storageSession,
  whitelist: ['cart','user'] 
}
export const persistedReducer = persistReducer(persistConfig, rootReducer);
