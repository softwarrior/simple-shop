import { createSelector } from "reselect";

const getOrdersData = (state) => state.orders.data;
const getActiveFilter = (state) => state.ordersFilter.activeFilter;
const getActivePage = (state) => state.ordersFilter.activePage;
const getSearch = (state) => state.ordersFilter.data.search;

const pageSize = 30;

export const getOrders = createSelector(
  [getOrdersData, getActiveFilter, getActivePage, getSearch],
  (orders, activeFilter, activePage, search) => {
    const searchedOrders = searchOrders(orders, search);
    const filteredOrders = filterOrders(searchedOrders, activeFilter);
    const pagedOrders = paginationOrders(filteredOrders, activePage);
    return [pagedOrders, filteredOrders.length];
  }
);

const paginationOrders = (orders, activePage) => {
  const begin = pageSize * (activePage - 1);
  const end = pageSize * activePage;
  return orders.slice(begin, end);
};

const filterOrders = (orders, activeFilter) => {
  if (!activeFilter) return orders;
  const { status, dateFrom, dateTo, sumFrom, sumTo } = activeFilter;
  return orders.filter((order) => {
    const isStatus = !status.length
      ? true
      : status.includes(order.status)
      ? true
      : false;
    const isDateFrom = !dateFrom
      ? true
      : Date.parse(order.date) >= Date.parse(dateFrom)
      ? true
      : false;
    const isDateTo = !dateTo
      ? true
      : Date.parse(order.date) <= Date.parse(dateTo)
      ? true
      : false;
    const isSumFrom = !sumFrom
      ? true
      : parseInt(order.sum.replace(/ /g, "")) >=
        parseInt(sumFrom.replace(/ /g, ""))
      ? true
      : false;
    const isSumTo = !sumTo
      ? true
      : parseInt(order.sum.replace(/ /g, "")) <=
        parseInt(sumTo.replace(/ /g, ""))
      ? true
      : false;
    return isStatus && isDateFrom && isDateTo && isSumFrom && isSumTo;
  });
};

const searchOrders = (orders, search) => {
  return orders.filter((order) => {
    return !search.length
      ? true
      : order.customer.includes(search)
      ? true
      : false;
  });
};
