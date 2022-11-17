import { Header } from "./components/Header/Header";
import { Filter } from "./components/Filter/Filter";
import { OrderForm } from "./components/OrderForm/OrderForm";
import { OrdersTable } from "./components/OrdersTable/OrdersTable";
import styles from "./OrderListPage.module.css";

export const OrderListPage = () => {
  return (
    <>
      <div className={styles._}>
        <Header title={"Список заказов"} />
        <Filter />
        <OrdersTable />
      </div>
      <OrderForm />
    </>
  );
};
