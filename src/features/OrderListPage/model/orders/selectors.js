import { createSelector } from "@reduxjs/toolkit";
import { PAGE_SIZE } from "../../OrderListPage.constants";
import {
  isDateInRange,
  isInRange,
  isSubstring,
  areAllThruthy,
  areSomeThruthy,
  isArrayIncludes,
  isIncludes,
} from "../../../../shared/utils";

const getOrderList = (state) => state.orders.orders;
const getFilter = (state) => state.ordersFilter;

const parseDate = (dateStr) => {
  if (!dateStr) return null;
  return Date.parse(dateStr);
};

export const getOrders = createSelector(
  [getOrderList, getFilter],
  (orders, filters) => {
    const filteredOrders = filterOrders(orders, filters);
    const sortedOrders = sortOrders(filteredOrders, filters);
    const paginatedOrders = paginateOrders(sortedOrders, filters);
    return [paginatedOrders, sortedOrders.length];
  }
);

const filterOrders = (orders, filters) => {
  const statusFilter = isArrayIncludes(filters.status);
  const searchNumberFilter = isSubstring(filters.search);
  const searchNameFilter = isIncludes(filters.search);
  const dateFilter = isDateInRange(
    parseDate(filters.dateFrom),
    parseDate(filters.dateTo)
  );
  const sumFiler = isInRange(
    parseInt(filters.sumFrom),
    parseInt(filters.sumTo)
  );
  return orders.filter(({ customer, date, sum, orderNumber, status }) => {
    return areAllThruthy([
      statusFilter(status),
      areSomeThruthy([
        searchNumberFilter(orderNumber),
        searchNameFilter(customer),
      ]),
      dateFilter(parseDate(date)),
      sumFiler(parseInt(sum)),
    ]);
  });
};

const sortOrders = (orders, filters) => {
  return orders.sort((order1, order2) => {
    return order1[filters.sortField] > order2[filters.sortField]
      ? -filters.direction
      : filters.direction;
  });
};

const paginateOrders = (orders, filters) => {
  const begin = PAGE_SIZE * (filters.page - 1);
  const end = PAGE_SIZE * filters.page;
  return orders.slice(begin, end);
};

export const getOrderById = (id) =>
  createSelector([getOrderList], (orders) => {
    return orders.find((order) => order.id === id);
  });
