import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Input,
} from "../../../../../shared/components";

import { FilterDropdown } from "../FilterDropdown/FilterDropdown";

import { OrderListPageContext } from "../../../OrderListPage";
import styles from "./FilterRow.module.css";

export const FilterRow = () => {
  const {
    isFilterOpen,
    onFilterDropdownOpen,
    filterDropdownValue,
    dateFromValue,
    dateToValue,
    sumFromValue,
    sumToValue,
    onDateFromChange,
    onDateToChange,
    onSumFromChange,
    onSumToChange,
    onDateFromReset,
    onDateToReset,
    onSumFromReset,
    onSumToReset,
  } = useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.hidden]: !isFilterOpen,
  });

  return (
    <div className={classNames}>
      <div className={styles.filterDate}>
        <Input
          title={"Дата оформления"}
          prefix={"c"}
          placeholder="dd.mm.yyyy"
          value={dateFromValue}
          onChange={onDateFromChange}
          onReset={onDateFromReset}
        />
        <Input
          prefix={"по"}
          placeholder="dd.mm.yyyy"
          value={dateToValue}
          onChange={onDateToChange}
          onReset={onDateToReset}
        />
      </div>
      <div className={styles.filterStatus}>
        <Input
          title={"Статус заказа"}
          value={filterDropdownValue}
          onClick={onFilterDropdownOpen}
          onReset={onFilterDropdownOpen}
          iconType={IconType.v_arrow}
          readOnly={true}
        />
        <FilterDropdown />
      </div>
      <div className={styles.filterPrice}>
        <Input
          title={"Сумма заказа"}
          prefix={"от"}
          placeholder="₽"
          value={sumFromValue}
          onChange={onSumFromChange}
          onReset={onSumFromReset}
        />
        <Input
          type="text"
          prefix={"до"}
          placeholder="₽"
          value={sumToValue}
          onChange={onSumToChange}
          onReset={onSumToReset}
        />
      </div>
      <Button
        className={styles.filtersButton}
        buttonStyle={ButtonStyle.transparent}
        size={ButtonSize.medium}
        isAlign={true}
      >
        Применить
      </Button>
    </div>
  );
};
