import classnames from "classnames";
import { useContext } from "react";
import { Radio } from "../../../../../shared/components";

import styles from "./ChangeStatusDropdown.module.css";

import { OrderListPageContext } from "../../../OrderListPage";

const DropdownStates = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const ChangeStatusDropdown = ({ name = "dropdownStatus" }) => {
  const { isStatusDropdownOpen } = useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isStatusDropdownOpen,
  });
  return (
    <div className={classNames}>
      <ul className={styles.list}>
        {Object.entries(DropdownStates).map(([key, value]) => (
          <li key={key} className={styles.item}>
            <Radio title={value} value={key} name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
