import { Icon, IconType, Checkbox } from "../../../../../shared/components";

import styles from "./TableOrderItem.module.css";

export const TableOrderItem = ({
  orderNum,
  orderDate,
  orderStatus,
  orderSum,
  orderCoast,
  customer,
}) => {
  return (
    <label className={styles._}>
      <Checkbox
        labelClassName={styles.checkboxWrap}
        divClassName={styles.checkboxPair}
        className={styles.checkbox}
        iconClassName={styles.icon}
        iconType={IconType.checkmark}
      ></Checkbox>
      <TableBodyCell className={styles.orderNumWrap} text={orderNum} />
      <TableBodyCell className={styles.dateWrap} text={orderDate} />
      <TableBodyCell
        className={styles.orderStatusWrap}
        text={orderStatus}
        iconType={IconType.dot}
      />
      <TableBodyCell className={styles.positionsSum} text={orderSum} />
      <TableBodyCell className={styles.orderSum} text={orderCoast} />
      <TableBodyCell className={styles.customerName} text={customer} />
    </label>
  );
};

const TableBodyCell = ({ className, text, iconType = null }) => {
  return (
    <div className={className}>
      {!!iconType && <Icon className={styles.iconStatus} iconType={iconType} />}
      <span className={styles.cellText}>{text}</span>
    </div>
  );
};
