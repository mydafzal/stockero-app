import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { stockeroApi } from "./api";
import authSlice from "./slice/authSlice";

export const store = configureStore({
  reducer: {
    [stockeroApi.reducerPath]: stockeroApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    stockeroApi.middleware,
  ],
});

setupListeners(store.dispatch);
