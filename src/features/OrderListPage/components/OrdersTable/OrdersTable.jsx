import { Table } from "../../../../shared/components";

import { OrdersTableHeader } from "./OrdersTableHeader/OrdersTableHeader";
import { OrdersTableBody } from "./OrdersTableBody/OrdersTableBody";
import { OrdersTableFooter } from "./OrdersTableFooter/OrdersTableFooter";

export const OrdersTable = () => (
  <Table
    header={<OrdersTableHeader />}
    body={<OrdersTableBody />}
    footer={<OrdersTableFooter />}
  />
);
