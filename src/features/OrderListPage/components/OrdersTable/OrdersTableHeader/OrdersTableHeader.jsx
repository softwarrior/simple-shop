import classnames from "classnames";

import {
  TableHeader,
  Checkbox,
  TableHeaderCell,
} from "../../../../../shared/components";

import styles from "./OrdersTableHeader.module.css";

const headerCells = [
  {
    className: styles.tableHeaderOrderNumber,
    text: "#",
    isIcon: false,
  },
  {
    className: styles.tableHeaderOrderDate,
    text: "Дата",
  },
  {
    className: classnames(
      styles.tableHeaderOrderStatus,
      styles.tableHeaderOrderActive
    ),
    text: "Статус",
  },
  {
    className: styles.tableHeaderOrderPosition,
    text: "Позиций",
  },
  {
    className: styles.tableHeaderOrderSum,
    text: "Сумма",
  },
  {
    className: styles.tableHeaderOrderCustomer,
    text: "ФИО покупателя",
    isIcon: false,
  },
];

export const OrdersTableHeader = () => {
  const cells = headerCells.map(({ className, text, isIcon }) => (
    <TableHeaderCell
      key={text}
      className={className}
      text={text}
      isIcon={isIcon}
    />
  ));
  return (
    <div className={styles._}>
      <TableHeader
        prefix={<Checkbox className={styles.tableHeaderCheckbox} />}
        cells={cells}
      />
    </div>
  );
};
