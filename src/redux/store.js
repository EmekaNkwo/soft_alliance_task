import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { elementApi } from "./api/elementApi";

export const store = configureStore({
  reducer: {
    [elementApi.reducerPath]: elementApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([elementApi.middleware]),
});

setupListeners(store.dispatch);
