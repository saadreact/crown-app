import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistedReducer } from "./rootReducer";
import { persistStore } from "redux-persist";

const config =
  process.env.NODE_ENV == "development"
    ? {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          }).concat(logger)
      }
    : {
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
            serializableCheck: false,
          })
      };

export const store = configureStore(config);

export const persistor = persistStore(store);
