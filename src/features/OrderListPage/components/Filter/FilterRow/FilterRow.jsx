import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Input,
} from "../../../../../shared/components";
import {
  getStatusText,
  getDateFrom,
  getDateTo,
  getSumFrom,
  getSumTo,
  setFilter,
  activateFilter,
} from "../../../model/ordersFilter";
import { FilterStatusDropdown } from "../../Dropdowns/FilterStatusDropdown/FilterStatusDropdown";
import styles from "./FilterRow.module.css";
import { useState } from "react";

export const FilterRow = ({ isFilterOpen }) => {
  const [isFilterDropdownOpen, setFilterDropdownOpen] = useState(false);
  const handleFilterDropdownOpen = () =>
    setFilterDropdownOpen(!isFilterDropdownOpen);

  const dispatch = useDispatch();

  const classNames = classnames(styles._, {
    [styles.hidden]: !isFilterOpen,
  });

  const reset = true;
  const createHandle =
    (filter, isReset = false) =>
    (event) =>
      dispatch(setFilter({ filter, value: isReset ? "" : event.target.value }));

  const handleAccept = () => {
    dispatch(activateFilter());
  };

  return (
    <div className={classNames}>
      <div className={styles.filterDate}>
        <Input
          title={"Дата оформления"}
          prefix={"c"}
          placeholder="dd.mm.yyyy"
          value={useSelector(getDateFrom)}
          onChange={createHandle("dateFrom")}
          onReset={createHandle("dateFrom", reset)}
        />
        <Input
          prefix={"по"}
          placeholder="dd.mm.yyyy"
          value={useSelector(getDateTo)}
          onChange={createHandle("dateTo")}
          onReset={createHandle("dateTo", reset)}
        />
      </div>
      <div className={styles.filterStatus}>
        <Input
          title={"Статус заказа"}
          value={useSelector(getStatusText)}
          onClick={handleFilterDropdownOpen}
          onReset={handleFilterDropdownOpen}
          iconType={IconType.v_arrow}
          readOnly={true}
        />
        <FilterStatusDropdown isOpen={isFilterDropdownOpen} />
      </div>
      <div className={styles.filterPrice}>
        <Input
          title={"Сумма заказа"}
          prefix={"от"}
          placeholder="₽"
          value={useSelector(getSumFrom)}
          onChange={createHandle("sumFrom")}
          onReset={createHandle("sumFrom", reset)}
        />
        <Input
          type="text"
          prefix={"до"}
          placeholder="₽"
          value={useSelector(getSumTo)}
          onChange={createHandle("sumTo")}
          onReset={createHandle("sumTo", reset)}
        />
      </div>
      <Button
        className={styles.filtersButton}
        buttonStyle={ButtonStyle.transparent}
        size={ButtonSize.medium}
        isAlign={true}
        onClick={handleAccept}
      >
        Применить
      </Button>
    </div>
  );
};
