import { useState, createContext, useMemo } from "react";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { Table } from "./components/Table/Table";

import styles from "./OrderListPage.module.css";

export const OrderListPageContext = createContext();

export const VisibilityType = {
  show: true,
  hide: false,
};

const filterDefaultValue = "Любой";

export const OrderListPage = () => {
  const [filterState, setFilterState] = useState(VisibilityType.hide);
  const [filterDropdownState, setFilterDropdownState] = useState(
    VisibilityType.hide
  );
  const [themeDropdownState, setThemeDropdownState] = useState(
    VisibilityType.hide
  );
  const [filterDropdownStates, setFilterDropdownStates] = useState([]);
  const [filterDropdownValue, setFilterDropdownValue] =
    useState(filterDefaultValue);
  const [filterReset, setFilterReset] = useState(false);
  const handleFilterState = () => {
    setFilterState(
      filterState === VisibilityType.show
        ? VisibilityType.hide
        : VisibilityType.show
    );
  };
  const handleFilterDropdownState = () => {
    setFilterDropdownState(
      filterDropdownState === VisibilityType.show
        ? VisibilityType.hide
        : VisibilityType.show
    );
  };
  const handleThemeDropdownState = () => {
    setThemeDropdownState(
      themeDropdownState === VisibilityType.show
        ? VisibilityType.hide
        : VisibilityType.show
    );
  };
  const handleFilterDropdownStates = (value) => {
    const dropdownStates = filterDropdownStates.includes(value)
      ? filterDropdownStates.filter((item) => item !== value)
      : [...filterDropdownStates, value];
    const dropdownValue = dropdownStates.length
      ? dropdownStates.join(", ")
      : filterDefaultValue;
    setFilterDropdownStates(dropdownStates);
    setFilterDropdownValue(dropdownValue);
  };
  const handleFilterReset = (flag) => {
    setFilterDropdownStates([]);
    setFilterDropdownValue(filterDefaultValue);
    setFilterReset(flag);
  };

  const value = useMemo(() => {
    return {
      filterState,
      onFilterState: handleFilterState,
      filterDropdownState,
      onFilterDropdownState: handleFilterDropdownState,
      themeDropdownState,
      onThemeDropdownState: handleThemeDropdownState,
      filterDropdownStates,
      onFilterDropdownStates: handleFilterDropdownStates,
      filterDropdownValue,
      filterReset,
      onFilterReset: handleFilterReset,
    };
  }, [
    filterState,
    filterDropdownState,
    themeDropdownState,
    filterDropdownStates,
    filterDropdownValue,
    filterReset,
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
