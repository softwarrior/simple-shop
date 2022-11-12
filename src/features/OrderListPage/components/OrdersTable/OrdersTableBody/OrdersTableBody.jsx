import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  Checkbox,
  TableRow,
  TableCell,
  TableBody,
} from "../../../../../shared/components";
import { Status } from "./Status/Status";
import { Sum } from "./Sum/Sum";
import { Dates } from "./Dates/Dates";
import styles from "./OrdersTableBody.module.css";
import commonStyles from "../OrdersTable.module.css";
import { sortOrders } from "../../../model/orders";

export const OrdersTableBody = ({ orders }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortOrders({ id: "date", direction: 1 }));
  }, []);

  const rows = orders.map(
    ({ id, orderNumber, date, status, amount, sum, currency, customer }) => {
      return (
        <TableRow key={id}>
          <Checkbox className={commonStyles.checkboxWrap} />
          <TableCell className={commonStyles.orderNumberWrap}>
            <span className={styles.cellText}>{orderNumber}</span>
          </TableCell>
          <TableCell className={commonStyles.dateWrap}>
            <Dates>{date}</Dates>
          </TableCell>
          <TableCell className={commonStyles.statusWrap}>
            <Status>{status}</Status>
          </TableCell>
          <TableCell className={commonStyles.amountWrap}>
            <span className={styles.cellText}>{amount}</span>
          </TableCell>
          <TableCell className={commonStyles.sumWrap}>
            <Sum currency={currency}>{sum}</Sum>
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
