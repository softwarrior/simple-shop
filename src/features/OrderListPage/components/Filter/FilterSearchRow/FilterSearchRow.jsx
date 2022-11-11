import classnames from "classnames";
import { useState, useEffect } from "react";
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

import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = ({ isFilterOpen, onFilterOpen }) => {
  const dispatch = useDispatch();

  let resetClassNames = classnames({
    [styles.hidden]: !isFilterOpen,
  });

  const [searchdValue, setSearchdValue] = useState(useSelector(getSearch));
  const handleSearchChange = ({ target: { value } }) => setSearchdValue(value);
  const handleSearchReset = () => setSearchdValue("");
  const handleResetAllClick = () =>
    dispatch(setFilter({ filter: "all", value: "" }));

  const debouncedSearchValue = useDebounce(searchdValue, 500);
  useEffect(() => {
    dispatch(setFilter({ filter: "search", value: debouncedSearchValue }));
  }, [debouncedSearchValue]);

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <Input
          className={styles.search}
          placeholder={"Номер заказа или ФИО"}
          prefix={
            <Icon className={styles.searchIcon} iconType={IconType.search} />
          }
          value={searchdValue}
          onChange={handleSearchChange}
          onReset={handleSearchReset}
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
          onClick={handleResetAllClick}
        >
          Сбросить фильтры
        </Button>
      </div>
      <FilterLoader buttonText="Загрузка" />
    </div>
  );
};

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
};
