import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";
import styles from "./OrderListPage.module.css";
import { useState } from "react";

const initialOrderState = { isOpen: false, id: null };

export const OrderListPage = () => {
  const [orderState, setOrderState] = useState(initialOrderState);
  const handleClose = () => setOrderState(initialOrderState);
  const handleOrderClick = (id) => setOrderState({ isOpen: true, id });
  const [orderChecked, setOrderChecked] = useState(false);
  const handleOrderChecked = (checked) => () => {
    setOrderChecked(checked);
  };

  return (
    <>
      <div className={styles._}>
        <Header title={"Список заказов"} />
        <Filter
          onFilterAccept={handleOrderChecked(false)}
          onFilterReset={handleOrderChecked(false)}
          onFilterSearch={handleOrderChecked(false)}
        />
        <OrdersTable
          orderChecked={orderChecked}
          onOrderClick={handleOrderClick}
          onOrderCheck={handleOrderChecked(true)}
        />
      </div>
      <OrderForm
        orderId={orderState.id}
        isOpen={orderState.isOpen}
        onClose={handleClose}
      />
    </>
  );
};
