import { useContext } from "react";
import classnames from "classnames";

import { Checkbox } from "../../../../../shared/components";

import { OrderListPageContext } from "../../../OrderListPage";
import styles from "./FilterDropdown.module.css";

const DropdownStates = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const FilterDropdown = () => {
  const { isFilterDropdownOpen, filterDropdownStates, onFilterDropdownStates } =
    useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isFilterDropdownOpen,
  });

  return (
    <div className={classNames}>
      <div className={styles.form}>
        <ul className={styles.list}>
          {Object.entries(DropdownStates).map(([key, value]) => (
            <li key={key} className={styles.item}>
              <Checkbox
                title={value}
                onChange={() => onFilterDropdownStates(value)}
                checked={filterDropdownStates.includes(value)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};