import classnames from "classnames";

import {
  TableHeader,
  Checkbox,
  TableHeaderCell,
  Icon,
  IconType,
} from "../../../../../shared/components";

import styles from "./OrdersTableHeader.module.css";
import commonStyles from "../OrdersTable.module.css";

const headerCells = [
  {
    className: commonStyles.orderNumberWrap,
    text: "#",
  },
  {
    className: commonStyles.dateWrap,
    text: "Дата",
    isIcon: true,
  },
  {
    className: classnames(
      commonStyles.statusWrap,
      styles.tableHeaderOrderActive
    ),
    text: "Статус",
    isIcon: true,
  },
  {
    className: commonStyles.amountWrap,
    text: "Позиций",
    isIcon: true,
  },
  {
    className: commonStyles.sumWrap,
    text: "Сумма",
    isIcon: true,
  },
  {
    className: commonStyles.customerWrap,
    text: "ФИО покупателя",
  },
];

export const OrdersTableHeader = () => {
  return (
    <div className={styles._}>
      <TableHeader>
        <Checkbox className={commonStyles.checkboxWrap} />
        {headerCells.map(({ className, text, isIcon }) => (
          <TableHeaderCell key={text} className={className}>
            <span className={styles.tableHeaderText}>{text}</span>
            {isIcon && (
              <Icon
                className={styles.tableHeaderIcon}
                iconType={IconType.v_arrow}
              />
            )}
          </TableHeaderCell>
        ))}
      </TableHeader>
    </div>
  );
};
