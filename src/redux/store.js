import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistedReducer } from "./rootReducer";
import { persistStore } from 'redux-persist';

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }).concat(process.env.NODE_ENV == "development" ? logger : null)
  });

  export const persistor = persistStore(store);
