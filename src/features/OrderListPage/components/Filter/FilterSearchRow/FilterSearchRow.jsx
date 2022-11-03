import classnames from "classnames";
import { useContext } from "react";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  Icon,
  IconType,
  Input,
  InputStyle,
} from "../../../../../shared/components";

import { FilterLoader } from "../FilterLoader/FilterLoader";

import { OrderListPageContext } from "../../../OrderListPage";
import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = () => {
  const { isFilterOpen, onFilterOpen, onFilterReset } =
    useContext(OrderListPageContext);

  let resetClassNames = classnames({
    [styles.hidden]: !isFilterOpen,
  });

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <Input
          className={styles.search}
          placeholder={"Номер заказа или ФИО"}
          prefix={
            <Icon className={styles.searchIcon} iconType={IconType.search} />
          }
          inputStyle={InputStyle.correct}
        />
        <Button
          buttonStyle={isFilterOpen ? ButtonStyle.primary : ButtonStyle.reverse}
          buttonSize={ButtonSize.medium}
          iconType={IconType.filter}
          isAlign={true}
          onClick={onFilterOpen}
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
