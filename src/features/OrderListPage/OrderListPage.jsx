import { useState, createContext, useMemo } from "react";

import { Header } from "./components/Header";
import { Filter } from "./components/Filter";
// import { Table } from './components/Table'

import locale from "./OrderListPage.locale";
import styles from "./OrderListPage.module.css";

export const OrderListPageContext = createContext();

export const VisibilityType = {
  show: "show",
  hide: "hide",
};

export const OrderListPage = ({ children }) => {
  const [filterState, setFilterState] = useState(VisibilityType.hide);
  const [filterDropdownState, setFilterDropdownState] = useState(
    VisibilityType.hide
  );
  const [themeDropdownState, setThemeDropdownState] = useState(
    VisibilityType.hide
  );

  const [filterDropdownStates, setFilterDropdownStates] = useState(
    locale.dropdownItemTexts.map(() => false)
  );
  const [filterDropdownValue, setFilterDropdownValue] = useState(
    locale.filterRowFifthDefaultValue
  );

  const [filterReset, setFilterReset] = useState(false);

  const handleFilterState = () => {
    switch (filterState) {
      case VisibilityType.hide:
        setFilterState(VisibilityType.show);
        break;
      case VisibilityType.show:
        setFilterState(VisibilityType.hide);
        break;
      default:
        break;
    }
  };

  const handleFilterDropdownState = () => {
    switch (filterDropdownState) {
      case VisibilityType.hide:
        setFilterDropdownState(VisibilityType.show);
        break;
      case VisibilityType.show:
        setFilterDropdownState(VisibilityType.hide);
        break;
      default:
        break;
    }
  };

  const handleThemeDropdownState = () => {
    switch (themeDropdownState) {
      case VisibilityType.hide:
        setThemeDropdownState(VisibilityType.show);
        break;
      case VisibilityType.show:
        setThemeDropdownState(VisibilityType.hide);
        break;
      default:
        break;
    }
  };

  const handleFilterDropdownStates = (position) => {
    const updatedFilterDropdownStates = filterDropdownStates.map(
      (item, index) => (index === position ? !item : item)
    );
    setFilterDropdownStates(updatedFilterDropdownStates);
    const totalFilterDropdownValue = updatedFilterDropdownStates.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum
            ? sum + "," + locale.dropdownItemTexts[index]
            : sum + locale.dropdownItemTexts[index];
        }
        return sum;
      },
      ""
    );
    setFilterDropdownValue(
      totalFilterDropdownValue
        ? totalFilterDropdownValue
        : locale.filterRowFifthDefaultValue
    );
  };

  const handleFilterReset = (flag) => {
    setFilterDropdownStates(locale.dropdownItemTexts.map(() => false));
    setFilterDropdownValue(locale.filterRowFifthDefaultValue);
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
        <div className={styles.content}>
          <Header title={locale.headerTitle} />
          <Filter />
          {/* <Table/> */}
          {children}
        </div>
      </div>
    </OrderListPageContext.Provider>
  );
};
