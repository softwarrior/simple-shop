import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  status: [],
  dateFrom: "",
  dateTo: "",
  sumFrom: "",
  sumTo: "",
  sortField: "date",
  direction: 1,
  page: 1,
};

const ordersFilterSlice = createSlice({
  name: "ordersFilter",
  initialState,
  reducers: {
    setFilter(state, { payload: { key, value } }) {
      state[key] = value;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setFilter, resetFilters } = ordersFilterSlice.actions;
export const ordersFilterReducer = ordersFilterSlice.reducer;
