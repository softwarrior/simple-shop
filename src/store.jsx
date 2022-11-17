import { configureStore } from "@reduxjs/toolkit";

import { orderListReducer } from "./features/OrderListPage";
import { consoleLogger } from "./middleware/consoleLogger";

export const store = configureStore({
  reducer: orderListReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(consoleLogger),
});
