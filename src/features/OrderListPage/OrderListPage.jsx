import { useState, createContext, useMemo } from "react";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";

import styles from "./OrderListPage.module.css";

export const OrderListPageContext = createContext();

const filterDefaultValue = "Любой";

export const OrderListPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [filterSelectedStatuses, setFilterSelectedStatuses] = useState([]);
  const [isFilterReset, setFilterReset] = useState(false);
  const [isDeleteDropdownOpen, setDeleteDropdownOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dateFromValue, setDateFromValue] = useState("");
  const [dateToValue, setDateToValue] = useState("");
  const [sumFromValue, setSumFromValue] = useState("");
  const [sumToValue, setSumToValue] = useState("");

  const createHandleChange =
    (setter) =>
    ({ target: { value } }) =>
      setter(value);
  const createHandleReset = (setter) => () => setter("");

  const handleSearchChange = createHandleChange(setSearchValue);
  const handleDateFromChange = createHandleChange(setDateFromValue);
  const handleDateToChange = createHandleChange(setDateToValue);
  const handleSumFromChange = createHandleChange(setSumFromValue);
  const handleSumToChange = createHandleChange(setSumToValue);

  const handleSearchReset = createHandleReset(setSearchValue);
  const handleDateFromReset = createHandleReset(setDateFromValue);
  const handleDateToReset = createHandleReset(setDateToValue);
  const handleSumFromReset = createHandleReset(setSumFromValue);
  const handleSumToReset = createHandleReset(setSumToValue);

  const handleFilterOpen = () => setFilterOpen(!isFilterOpen);
  const handleFilterDropdownOpen = () =>
    setFilterDropdownOpen(!isFilterDropdownOpen);
  const handleThemeDropdownOpen = () =>
    setThemeDropdownOpen(!isThemeDropdownOpen);
  const handleDeleteDropdownOpen = () =>
    setDeleteDropdownOpen(!isDeleteDropdownOpen);

  const handlefilterSelectedStatuses = (value) => {
    const dropdownStates = filterSelectedStatuses.includes(value)
      ? filterSelectedStatuses.filter((item) => item !== value)
      : [...filterSelectedStatuses, value];
    setFilterSelectedStatuses(dropdownStates);
  };

  const filterStatusText = useMemo(
    () =>
      filterSelectedStatuses.length == 0 || filterSelectedStatuses.length == 6
        ? filterDefaultValue
        : filterSelectedStatuses.join(", "),
    [filterSelectedStatuses]
  );

  const handleFilterReset = () => {
    setFilterSelectedStatuses([]);
    setFilterReset(false);
  };

  const value = useMemo(() => {
    return {
      isFilterOpen,
      onFilterOpen: handleFilterOpen,
      isFilterDropdownOpen,
      onFilterDropdownOpen: handleFilterDropdownOpen,
      isThemeDropdownOpen,
      onThemeDropdownOpen: handleThemeDropdownOpen,
      filterSelectedStatuses,
      onfilterSelectedStatuses: handlefilterSelectedStatuses,
      filterStatusText,
      isFilterReset,
      onFilterReset: handleFilterReset,
      searchValue,
      dateFromValue,
      dateToValue,
      sumFromValue,
      sumToValue,
      onSearchChange: handleSearchChange,
      onDateFromChange: handleDateFromChange,
      onDateToChange: handleDateToChange,
      onSumFromChange: handleSumFromChange,
      onSumToChange: handleSumToChange,
      onSearchReset: handleSearchReset,
      onDateFromReset: handleDateFromReset,
      onDateToReset: handleDateToReset,
      onSumFromReset: handleSumFromReset,
      onSumToReset: handleSumToReset,
      isDeleteDropdownOpen,
      onDeleteDropdownOpen: handleDeleteDropdownOpen,
    };
  }, [
    isFilterOpen,
    isFilterDropdownOpen,
    isThemeDropdownOpen,
    filterSelectedStatuses,
    filterStatusText,
    isFilterReset,
    searchValue,
    dateFromValue,
    dateToValue,
    sumFromValue,
    sumToValue,
    isDeleteDropdownOpen,
  ]);

  return (
    <OrderListPageContext.Provider value={value}>
      <div className={styles._}>
        <Header title={"Список заказов"} />
        <Filter />
        <OrdersTable />
      </div>
    </OrderListPageContext.Provider>
  );
};
