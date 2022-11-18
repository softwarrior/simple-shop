import { createSlice } from "@reduxjs/toolkit";
import mock from "../../components/OrderForm/ProductsTable/ProductsTable.mock.json";

const initialState = {
  products: mock,
};

const ordersFormSlice = createSlice({
  name: "ordersForm",
  initialState,
  reducers: {},
});

export const ordersFormReducer = ordersFormSlice.reducer;
