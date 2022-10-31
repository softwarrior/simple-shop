import classnames from "classnames";
import { useContext } from "react";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Searchbar,
} from "../../../../../shared/components";

import { FilterLoader } from "../FilterLoader/FilterLoader";

import { OrderListPageContext, VisibilityType } from "../../../OrderListPage";
import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = () => {
  const { filterState, onFilterState, onFilterReset } =
    useContext(OrderListPageContext);

  let resetClassNames = classnames({
    [styles.hidden]: filterState === VisibilityType.hide,
  });

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <Searchbar placeholder="Номер заказа или ФИО" />
        <Button
          buttonStyle={ButtonStyle.primary}
          buttonSize={ButtonSize.medium}
          iconType={IconType.filter}
          isAlign={true}
          onClick={onFilterState}
        >
          Фильтры
        </Button>
        <Button
          className={resetClassNames}
          buttonStyle={ButtonStyle.transparent}
          buttonSize={ButtonSize.medium}
          isAlign={true}
          onClick={onFilterReset}
        >
          Сбросить фильтры
        </Button>
      </div>
      <FilterLoader buttonText="Загрузка" />
    </div>
  );
};
