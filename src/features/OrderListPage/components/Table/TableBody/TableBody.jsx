import { TableOrderItem } from "../TableOrderItem/TableOrderItem";

import styles from "./TableBody.module.css";
import mock from "../../../OrderListPage.mock.json";

export const TableBody = () => {
  const orderRow = mock.map((user) => {
    return (
      <TableOrderItem
        orderNum={user.orderNumber}
        orderDate={user.date}
        orderStatus={user.status}
        orderSum={user.amount}
        orderCoast={user.sum}
        customer={user.customer}
        key={user.id}
      />
    );
  });
  return (
    <div className={styles._}>
      <div className={styles.tableBodyCustomerList}>{orderRow}</div>
    </div>
  );
};
