import { useState, createContext, useMemo } from "react";

import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";

import styles from "./OrderListPage.module.css";

export const OrderListPageContext = createContext();

export const OrderListPage = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [isDeleteDropdownOpen, setDeleteDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [isPageDropdownOpen, setPageDropdownOpen] = useState(false);

  const handleFilterOpen = () => setFilterOpen(!isFilterOpen);
  const handleFilterDropdownOpen = () =>
    setFilterDropdownOpen(!isFilterDropdownOpen);
  const handleThemeDropdownOpen = () =>
    setThemeDropdownOpen(!isThemeDropdownOpen);
  const handleDeleteDropdownOpen = () =>
    setDeleteDropdownOpen(!isDeleteDropdownOpen);
  const handleStatusDropdownOpen = () =>
    setStatusDropdownOpen(!isStatusDropdownOpen);
  const handlePageDropdownOpen = () => setPageDropdownOpen(!isPageDropdownOpen);

  const value = useMemo(() => {
    return {
      isFilterOpen,
      onFilterOpen: handleFilterOpen,
      isFilterDropdownOpen,
      onFilterDropdownOpen: handleFilterDropdownOpen,
      isThemeDropdownOpen,
      onThemeDropdownOpen: handleThemeDropdownOpen,
      isDeleteDropdownOpen,
      onDeleteDropdownOpen: handleDeleteDropdownOpen,
      isStatusDropdownOpen,
      onStatusDropdownOpen: handleStatusDropdownOpen,
      isPageDropdownOpen,
      onPageDropdownOpen: handlePageDropdownOpen,
    };
  }, [
    isFilterOpen,
    isFilterDropdownOpen,
    isThemeDropdownOpen,
    isDeleteDropdownOpen,
    isStatusDropdownOpen,
    isPageDropdownOpen,
  ]);

  return (
    <OrderListPageContext.Provider value={value}>
      <div className={styles._}>
        <Header title={"Список заказов"} />
        <Filter />
        <OrdersTable />
      </div>
      <OrderForm />
    </OrderListPageContext.Provider>
  );
};
