import { createSelector } from "reselect";

const getFilter = (state) => state.ordersFilter.data;

export const getActivePage = (state) => state.ordersFilter.activePage;

export const getSearch = createSelector(getFilter, (filter) => filter.search);
export const getStatus = createSelector(getFilter, (filter) => filter.status);
export const getDateFrom = createSelector(
  getFilter,
  (filter) => filter.dateFrom
);
export const getDateTo = createSelector(getFilter, (filter) => filter.dateTo);
export const getSumFrom = createSelector(getFilter, (filter) => filter.sumFrom);
export const getSumTo = createSelector(getFilter, (filter) => filter.sumTo);

const statusName = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const getStatusText = createSelector(getStatus, (status) => {
  const names = status.map((key) => statusName[key]);
  return names.length == 0 || names.length == 6 ? "Любой" : names.join(", ");
});
