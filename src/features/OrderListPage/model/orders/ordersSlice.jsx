import { createSlice } from "@reduxjs/toolkit";

import mock from "../../OrderListPage.mock.json";

const initialState = {
  data: mock,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder(state, action) {
      const { id, text } = action.payload;
      state.data.push({ id, text });
    },
    selectOrder(state, action) {
      const id = action.payload;
      const order = state.data.find((order) => order.id === id);
      if (order) {
        order.selected = !order.selected;
      }
    },
    deleteOrder(state, action) {
      const id = action.payload;
      state.data = state.data.filter((order) => order.id !== id);
    },
    sortOrders(state, { payload: { id, direction } }) {
      state.data.sort((a, b) => {
        const v1 = id == "sum" ? parseInt(a[id].replace(/ /g, "")) : a[id];
        const v2 = id == "sum" ? parseInt(b[id].replace(/ /g, "")) : b[id];
        return v1 > v2 ? direction : -direction;
      });
    },
  },
});

export const { addOrder, selectOrder, deleteOrder, sortOrders } =
  ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
