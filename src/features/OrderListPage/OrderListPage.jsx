import { useState, createContext, useMemo } from "react";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { Table } from "./components/Table/Table";

import styles from "./OrderListPage.module.css";
import { useEffect } from "react";

export const OrderListPageContext = createContext();

const filterDefaultValue = "Любой";

export const OrderListPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [filterDropdownStates, setFilterDropdownStates] = useState([]);
  const [filterDropdownValue, setFilterDropdownValue] =
    useState(filterDefaultValue);
  const [isFilterReset, setFilterReset] = useState(false);

  const handleFilterOpen = () => {
    setFilterOpen(!isFilterOpen);
  };

  const handleFilterDropdownOpen = () => {
    setFilterDropdownOpen(!isFilterDropdownOpen);
  };

  const handleThemeDropdownOpen = () => {
    setThemeDropdownOpen(!isThemeDropdownOpen);
  };

  const handleFilterDropdownStates = (value) => {
    const dropdownStates = filterDropdownStates.includes(value)
      ? filterDropdownStates.filter((item) => item !== value)
      : [...filterDropdownStates, value];
    setFilterDropdownStates(dropdownStates);
  };

  useEffect(() => {
    const dropdownValue =
      filterDropdownStates.length == 0 || filterDropdownStates.length == 6
        ? filterDefaultValue
        : filterDropdownStates.join(", ");
    setFilterDropdownValue(dropdownValue);
  }, [filterDropdownStates]);

  const handleFilterReset = () => {
    setFilterDropdownStates([]);
    setFilterDropdownValue(filterDefaultValue);
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
      filterDropdownStates,
      onFilterDropdownStates: handleFilterDropdownStates,
      filterDropdownValue,
      isFilterReset,
      onFilterReset: handleFilterReset,
    };
  }, [
    isFilterOpen,
    isFilterDropdownOpen,
    isThemeDropdownOpen,
    filterDropdownStates,
    filterDropdownValue,
    isFilterReset,
  ]);

  return (
    <OrderListPageContext.Provider value={value}>
      <div className={styles._}>
        <Header title={"Список заказов"} />
        <Filter />
        <Table />
      </div>
    </OrderListPageContext.Provider>
  );
};
