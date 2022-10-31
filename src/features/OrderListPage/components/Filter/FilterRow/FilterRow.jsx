import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  Input,
  InputStyle,
} from "../../../../../shared/components";
// import { Input, InputStyle } from "../../../shared/components/Input";

import { FilterDropdown } from "../FilterDropdown/FilterDropdown";

import { OrderListPageContext, VisibilityType } from "../../../OrderListPage";
import styles from "./FilterRow.module.css";

export const FilterRow = () => {
  const { filterState, onFilterDropdownState, filterDropdownValue } =
    useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.hidden]: filterState === VisibilityType.hide,
  });

  return (
    <div className={classNames}>
      <div className={styles.filterDate}>
        <Input
          leftText="c"
          inputStyle={InputStyle.correct}
          placeholder="dd.mm.dddd"
        >
          Дата оформления
        </Input>
        <Input
          leftText="по"
          inputStyle={InputStyle.empty}
          placeholder="dd.mm.dddd"
        >
          &ensp;
        </Input>
      </div>
      <div className={styles.filterStatus}>
        <Input
          inputStyle={InputStyle.dropdown}
          value={filterDropdownValue}
          onClick={onFilterDropdownState}
          readOnly={true}
        >
          Статус заказа
        </Input>
        <FilterDropdown />
      </div>
      <div className={styles.filterPrice}>
        <Input
          type="text"
          leftText="до"
          inputStyle={InputStyle.empty}
          placeholder="₽"
        >
          Сумма заказ
        </Input>
        <Input
          type="text"
          leftText="до"
          inputStyle={InputStyle.empty}
          placeholder="₽"
        >
          &ensp;
        </Input>
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
