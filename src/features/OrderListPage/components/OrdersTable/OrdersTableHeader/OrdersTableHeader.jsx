import { useState } from "react";

import { TableHeader, Checkbox } from "../../../../../shared/components";

import { HeaderCell } from "./HeaderCell/HeaderCell";

import styles from "./OrdersTableHeader.module.css";
import commonStyles from "../OrdersTable.module.css";

const headerCells = {
  orderNumber: {
    className: commonStyles.orderNumberWrap,
    text: "#",
  },
  date: {
    className: commonStyles.dateWrap,
    text: "Дата",
    isIcon: true,
  },
  status: {
    className: commonStyles.statusWrap,
    text: "Статус",
    isIcon: true,
  },
  amount: {
    className: commonStyles.amountWrap,
    text: "Позиций",
    isIcon: true,
  },
  sum: {
    className: commonStyles.sumWrap,
    text: "Сумма",
    isIcon: true,
  },
  customer: {
    className: commonStyles.customerWrap,
    text: "ФИО покупателя",
  },
};

export const OrdersTableHeader = () => {
  const [activeId, setActiveId] = useState("date");
  const handleActiveId = (id) => setActiveId(id);
  return (
    <div className={styles._}>
      <TableHeader>
        <Checkbox className={commonStyles.checkboxWrap} />
        {Object.entries(headerCells).map(
          ([key, { className, text, isIcon }]) => (
            <HeaderCell
              key={key}
              id={key}
              className={className}
              text={text}
              isIcon={isIcon}
              isActive={activeId === key}
              onClick={isIcon ? () => handleActiveId(key) : () => {}}
            />
          )
        )}
      </TableHeader>
    </div>
  );
};
