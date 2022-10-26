import { useContext } from "react";
import classnames from "classnames";

import { DropdownItem } from "../../../shared/components/DropdownItem";

import { OrderListPageContext, VisibilityType } from "../OrderListPage";
import locale from "../OrderListPage.locale";
import styles from "./FilterDropdown.module.css";

export const FilterDropdown = () => {
  const { filterDropdownState, filterDropdownStates, onFilterDropdownStates } =
    useContext(OrderListPageContext);

  let className = null;
  switch (filterDropdownState) {
    case VisibilityType.hide:
      className = classnames(styles._, styles.disabled);
      break;
    case VisibilityType.show:
      className = styles._;
      break;
    default:
      break;
  }

  return (
    <div className={className}>
      <div className={styles.form}>
        <ul className={styles.list}>
          {locale.dropdownItemTexts.map((text, index) => (
            <DropdownItem
              key={index}
              itemText={text}
              position={index}
              onChange={() => onFilterDropdownStates(index)}
              checked={filterDropdownStates[index]}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};
