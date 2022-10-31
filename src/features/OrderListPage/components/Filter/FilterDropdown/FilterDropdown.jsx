import { useContext } from "react";
import classnames from "classnames";

import { DropdownItem } from "../../../../../shared/components/DropdownItem/DropdownItem";

import { OrderListPageContext, VisibilityType } from "../../../OrderListPage";
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
  const { filterDropdownState, filterDropdownStates, onFilterDropdownStates } =
    useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: filterDropdownState === VisibilityType.hide,
  });

  return (
    <div className={classNames}>
      <div className={styles.form}>
        <ul className={styles.list}>
          {Object.entries(DropdownStates).map(([key, value]) => (
            <DropdownItem
              key={key}
              itemText={value}
              onChange={() => onFilterDropdownStates(value)}
              checked={filterDropdownStates.includes(value)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
