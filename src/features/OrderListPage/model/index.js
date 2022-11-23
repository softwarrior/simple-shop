import { combineReducers } from "redux";

import { ordersReducer } from "./orders/ordersSlice";
import { ordersFilterReducer } from "./ordersFilter/ordersFilterSlice";
import { ordersFormReducer } from "./ordersForm/ordersFormSlice";

export const orderListReducer = combineReducers({
  orders: ordersReducer,
  ordersFilter: ordersFilterReducer,
  ordersForm: ordersFormReducer,
});
