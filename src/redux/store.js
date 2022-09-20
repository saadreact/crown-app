import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistedReducer } from "./rootReducer";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      let middleware = getDefaultMiddleware({
        serializableCheck: false,
      });

      middleware = middleware.concat(thunk)

      if (process.env.NODE_ENV === "development") {
        middleware = middleware.concat(logger);
      }
      return middleware;
    }

  });

export const persistor = persistStore(store);
