import classnames from "classnames";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  Icon,
  IconType,
  Input,
} from "../../../../../shared/components";

import { getSearch, setFilter } from "../../../model/ordersFilter";

import { FilterLoader } from "../FilterLoader/FilterLoader";

import { OrderListPageContext } from "../../../OrderListPage";
import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = () => {
  const { isFilterOpen, onFilterOpen } = useContext(OrderListPageContext);
  const dispatch = useDispatch();

  let resetClassNames = classnames({
    [styles.hidden]: !isFilterOpen,
  });

  const reset = true;
  const createHandle =
    (filter, isReset = false) =>
    (event) =>
      dispatch(setFilter({ filter, value: isReset ? "" : event.target.value }));

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <Input
          className={styles.search}
          placeholder={"Номер заказа или ФИО"}
          prefix={
            <Icon className={styles.searchIcon} iconType={IconType.search} />
          }
          value={useSelector(getSearch)}
          onChange={createHandle("search")}
          onReset={createHandle("search", reset)}
        />
        <Button
          buttonStyle={isFilterOpen ? ButtonStyle.primary : ButtonStyle.reverse}
          size={ButtonSize.medium}
          iconType={IconType.filter}
          isAlign={true}
          onClick={onFilterOpen}
        >
          Фильтры
        </Button>
        <Button
          className={resetClassNames}
          buttonStyle={ButtonStyle.transparent}
          size={ButtonSize.medium}
          isAlign={true}
          onClick={createHandle("all", reset)}
        >
          Сбросить фильтры
        </Button>
      </div>
      <FilterLoader buttonText="Загрузка" />
    </div>
  );
};
