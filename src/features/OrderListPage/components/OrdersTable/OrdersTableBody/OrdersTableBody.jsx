import {
  Checkbox,
  TableRow,
  TableCell,
  TableBody,
} from "../../../../../shared/components";

import { Status } from "./Status/Status";

import styles from "./OrdersTableBody.module.css";
import commonStyles from "../OrdersTable.module.css";
import mock from "../../../OrderListPage.mock.json";

export const OrdersTableBody = () => {
  const rows = mock.map(
    ({ id, orderNumber, date, status, amount, sum, customer }) => {
      return (
        <TableRow key={id}>
          <Checkbox className={commonStyles.checkboxWrap} />
          <TableCell className={commonStyles.orderNumberWrap}>
            <span className={styles.cellText}>{orderNumber}</span>
          </TableCell>
          <TableCell className={commonStyles.dateWrap}>
            <span className={styles.cellText}>{date}</span>
          </TableCell>
          <TableCell className={commonStyles.statusWrap}>
            <Status status={status} />
          </TableCell>
          <TableCell className={commonStyles.amountWrap}>
            <span className={styles.cellText}>{amount}</span>
          </TableCell>
          <TableCell className={commonStyles.sumWrap}>
            <span className={styles.cellText}>{sum}</span>
          </TableCell>
          <TableCell className={commonStyles.customerWrap}>
            <span className={styles.cellText}>{customer}</span>
          </TableCell>
        </TableRow>
      );
    }
  );
  return <TableBody>{rows}</TableBody>;
};
