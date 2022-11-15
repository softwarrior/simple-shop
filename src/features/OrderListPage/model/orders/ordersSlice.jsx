import { createSlice } from "@reduxjs/toolkit";

import mock from "../../OrderListPage.mock.json";

const initialState = {
  orders: mock,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    deleteOrders(state, { payload: { ids } }) {
      state.orders = state.orders.filter((order) => !ids.includes(order.id));
    },
  },
});

export const { deleteOrders } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
