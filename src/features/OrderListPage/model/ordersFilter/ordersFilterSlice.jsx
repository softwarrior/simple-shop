import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    search: "",
    status: [],
    dateFrom: "",
    dateTo: "",
    sumFrom: "",
    sumTo: "",
  },
  activeFilter: null,
  activePage: 1,
};

const ordersFilterSlice = createSlice({
  name: "ordersFilter",
  initialState,
  reducers: {
    setFilter(state, action) {
      setState(state, action);
    },
    resetFilter(state, action) {
      setState(state, action);
    },
    activateFilter(state, { payload = true }) {
      state.activeFilter = payload === true ? state.data : null;
    },
    activatePage(state, { payload }) {
      state.activePage = payload;
    },
  },
});

export const { setFilter, resetFilter, activateFilter, activatePage } =
  ordersFilterSlice.actions;
export const ordersFilterReducer = ordersFilterSlice.reducer;

const setState = (state, { payload: { filter, value } }) => {
  const { data } = state;
  switch (filter) {
    case "all":
      data.search = value;
      data.status = !value ? [] : value;
      data.dateFrom = value;
      data.dateTo = value;
      data.sumFrom = value;
      data.sumTo = value;
      state.activeFilter = null;
      state.activePage = 1;
      break;
    case "status":
      data.status = data.status.includes(value)
        ? data.status.filter((item) => item !== value)
        : [...data.status, value];
      break;
    case "search":
      data.search = value;
      break;
    case "dateFrom":
      data.dateFrom = value;
      break;
    case "dateTo":
      data.dateTo = value;
      break;
    case "sumFrom":
      data.sumFrom = value;
      break;
    case "sumTo":
      data.sumTo = value;
      break;
    default:
      break;
  }
};
