import classnames from "classnames";

import { Icon, IconType, Checkbox } from "../../../../../shared/components";

import styles from "./TableHeader.module.css";

export const TableHeader = () => {
  const tableHeaderOrders = [
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
      className: styles.tableHeaderOrderStatus,
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

  return (
    <div className={styles.tableHeader}>
      <div className={styles.tableHeaderCheckboxWrap}>
        <Checkbox
          labelClassName={styles.tableHeaderCheckboxPair}
          divClassName={null}
          className={styles.tableHeaderCheckbox}
          iconClassName={classnames(
            styles.TableHeaderIcon,
            styles.tableHeaderIconCheckbox
          )}
          checked={null}
        ></Checkbox>
      </div>
      {tableHeaderOrders.map((order) => (
        <TableHeaderRow key={order.text} order={order} />
      ))}
    </div>
  );
};

const TableHeaderRow = ({ order: { className, text, isIcon = true } }) => {
  return (
    <div className={className}>
      <span className={styles.tableHeaderText}>{text}</span>
      {isIcon && (
        <Icon className={styles.tableHeaderIcon} iconType={IconType.v_arrow} />
      )}
    </div>
  );
};
