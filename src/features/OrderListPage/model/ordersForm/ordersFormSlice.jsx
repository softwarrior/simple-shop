import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: "",
};

const ordersFormSlice = createSlice({
  name: "ordersForm",
  initialState,
  reducers: {
    setCustomer(state, action) {
      state.customer = action.payload;
    },
  },
});

export const { setCustomer } = ordersFormSlice.actions;
export const ordersFormReducer = ordersFormSlice.reducer;
