import { createSlice } from "@reduxjs/toolkit";

import mock from "../../OrderListPage.mock.json";

const initialState = {
  orders: mock,
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
});

export const ordersReducer = ordersSlice.reducer;
