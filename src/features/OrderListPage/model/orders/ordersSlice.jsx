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
    changeOrder(state, { payload: { id, key, value } }) {
      const order = state.orders.find((order) => order.id === id);
      order[key] = value;
    },
  },
});

export const { deleteOrders, changeOrder } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
