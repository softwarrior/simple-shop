import classnames from "classnames";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  Icon,
  IconType,
  Input,
  useDebounce,
} from "../../../../../shared/components";
import { setFilter, resetFilters } from "../../../model/ordersFilter";
import { FilterLoader } from "../FilterLoader/FilterLoader";
import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = ({
  isFilterOpen,
  onFilterOpen,
  onFilterReset,
  onFilterSearch,
}) => {
  const dispatch = useDispatch();

  let resetClassNames = classnames({
    [styles.hidden]: !isFilterOpen,
  });

  const [searchValue, setSearchValue] = useState("");
  const handleSearchChange = ({ target: { value } }) => setSearchValue(value);
  const handleSearchReset = () => setSearchValue("");
  const handleResetAllClick = () => {
    onFilterReset();
    setSearchValue("");
    dispatch(resetFilters());
  };

  const debouncedSearchValue = useDebounce(searchValue, 300);
  useEffect(() => {
    dispatch(setFilter({ key: "search", value: debouncedSearchValue }));
    onFilterSearch();
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
          value={searchValue}
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
