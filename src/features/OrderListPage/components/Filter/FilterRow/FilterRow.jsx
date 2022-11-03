import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Input,
  InputStyle,
} from "../../../../../shared/components";

import { FilterDropdown } from "../FilterDropdown/FilterDropdown";

import { OrderListPageContext } from "../../../OrderListPage";
import styles from "./FilterRow.module.css";

export const FilterRow = () => {
  const { isFilterOpen, onFilterDropdownOpen, filterDropdownValue } =
    useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.hidden]: !isFilterOpen,
  });

  return (
    <div className={classNames}>
      <div className={styles.filterDate}>
        <Input
          title={"Дата оформления"}
          prefix={"c"}
          inputStyle={InputStyle.correct}
          placeholder="dd.mm.yyyy"
        />
        <Input
          prefix={"по"}
          inputStyle={InputStyle.empty}
          placeholder="dd.mm.yyyy"
        />
      </div>
      <div className={styles.filterStatus}>
        <Input
          title={"Статус заказа"}
          value={filterDropdownValue}
          onClick={onFilterDropdownOpen}
          onButtonClick={onFilterDropdownOpen}
          inputStyle={InputStyle.correct}
          iconType={IconType.v_arrow}
          readOnly={true}
        />
        <FilterDropdown />
      </div>
      <div className={styles.filterPrice}>
        <Input
          title={"Сумма заказа"}
          prefix={"от"}
          inputStyle={InputStyle.empty}
          placeholder="₽"
        />
        <Input
          type="text"
          prefix={"до"}
          inputStyle={InputStyle.empty}
          placeholder="₽"
        />
      </div>
      <Button
        className={styles.filtersButton}
        buttonStyle={ButtonStyle.transparent}
        buttonSize={ButtonSize.medium}
        isAlign={true}
      >
        Применить
      </Button>
    </div>
  );
};
