import {
  Checkbox,
  TableRow,
  TableCell,
  TableBody,
  IconType,
} from "../../../../../shared/components";

import styles from "./OrdersTableBody.module.css";
import mock from "../../../OrderListPage.mock.json";

const statusName = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

const statusIcon = {
  completed: IconType.checkmark,
  declined: IconType.abort,
};

const statusIconStyle = {
  new: styles.iconPostponed,
  calculation: styles.iconCalculation,
  confirmed: styles.iconCompleted,
  postponed: styles.iconPostponed,
  completed: styles.iconCompleted,
  declined: styles.iconCanceled,
};

export const OrdersTableBody = () => {
  const rows = mock.map(
    ({ id, orderNumber, date, status, amount, sum, customer }) => {
      return (
        <TableRow
          key={id}
          prefix={<Checkbox className={styles.checkboxWrap} />}
          cells={[
            <TableCell
              key={`${id}_1`}
              className={styles.orderNumberWrap}
              text={orderNumber}
            />,
            <TableCell
              key={`${id}_2`}
              className={styles.dateWrap}
              text={date}
            />,
            <TableCell
              key={`${id}_3`}
              className={styles.statusWrap}
              text={statusName[status]}
              iconType={statusIcon[status] || IconType.dot}
              iconClassName={statusIconStyle[status]}
            />,
            <TableCell
              key={`${id}_4`}
              className={styles.amountWrap}
              text={amount}
            />,
            <TableCell key={`${id}_5`} className={styles.sumWrap} text={sum} />,
            <TableCell
              key={`${id}_6`}
              className={styles.customerWrap}
              text={customer}
            />,
          ]}
        />
      );
    }
  );
  return <TableBody rows={rows} />;
};
