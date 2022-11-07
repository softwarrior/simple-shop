import { useSelector } from "react-redux";

import { Table } from "../../../../shared/components";

import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

import { getOrders } from "../../model/orders";

export const OrdersTable = () => {
  const [orders, ordersCount] = useSelector(getOrders);

  return (
    <Table>
      <OrdersTableHeader />
      <OrdersTableBody orders={orders} />
      <OrdersTableFooter ordersCount={ordersCount} />
    </Table>
  );
};
