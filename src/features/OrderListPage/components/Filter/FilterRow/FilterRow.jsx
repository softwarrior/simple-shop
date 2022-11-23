import { useDispatch } from "react-redux";
import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
  Input,
} from "../../../../../shared/components";
import { setFilter } from "../../../model/ordersFilter";
import { FilterStatusDropdown } from "../../Dropdowns/FilterStatusDropdown/FilterStatusDropdown";
import styles from "./FilterRow.module.css";
import { useState } from "react";
import { STATUS_NAME } from "../../../OrderListPage.constants";
import { useEffect } from "react";

export const FilterRow = ({ isFilterOpen, isFilterReset, onFilterAccept }) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [sumFrom, setSumFrom] = useState("");
  const [sumTo, setSumTo] = useState("");
  const [status, setStatus] = useState([]);
  const [isStatusDropdownOpen, setStatusDropdownOpen] = useState(false);

  useEffect(() => {
    if (isFilterReset) {
      setDateFrom("");
      setDateTo("");
      setSumFrom("");
      setSumTo("");
      setStatus([]);
      setStatusDropdownOpen(false);
    }
  }, [isFilterReset]);

  const dispatch = useDispatch();

  const handleInput =
    (setter) =>
    ({ target: { value } }) =>
      setter(value);
  const resetInput = (setter) => () => setter("");
  const handleStatusDropdownOpen = () =>
    setStatusDropdownOpen(!isStatusDropdownOpen);
  const handleStatus = (key) => {
    setStatus(
      status.includes(key)
        ? status.filter((item) => item !== key)
        : [...status, key]
    );
  };

  const parseDate = (value) => {
    const [day, month, year] = value.split(".");
    if (!day && !month && !year) return "";
    const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    return date.toString();
  };

  const parseNumber = (value) => {
    return value.replace(/ /g, "");
  };

  const handleAccept = () => {
    dispatch(setFilter({ key: "dateFrom", value: parseDate(dateFrom) }));
    dispatch(setFilter({ key: "dateTo", value: parseDate(dateTo) }));
    dispatch(setFilter({ key: "sumFrom", value: parseNumber(sumFrom) }));
    dispatch(setFilter({ key: "sumTo", value: parseNumber(sumTo) }));
    dispatch(setFilter({ key: "status", value: status }));
    onFilterAccept();
  };

  const statusValue = () => {
    const names = status.map((key) => STATUS_NAME[key]);
    return names.length == 0 || names.length == 6 ? "Любой" : names.join(", ");
  };

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
          value={dateFrom}
          onChange={handleInput(setDateFrom)}
          onReset={resetInput(setDateFrom)}
        />
        <Input
          prefix={"по"}
          placeholder="dd.mm.yyyy"
          value={dateTo}
          onChange={handleInput(setDateTo)}
          onReset={resetInput(setDateTo)}
        />
      </div>
      <div className={styles.filterStatus}>
        <Input
          title={"Статус заказа"}
          value={statusValue()}
          onClick={handleStatusDropdownOpen}
          onReset={handleStatusDropdownOpen}
          iconType={IconType.v_arrow}
          readOnly={true}
        />
        <FilterStatusDropdown
          isOpen={isStatusDropdownOpen}
          status={status}
          onChange={handleStatus}
        />
      </div>
      <div className={styles.filterPrice}>
        <Input
          title={"Сумма заказа"}
          prefix={"от"}
          placeholder="₽"
          value={sumFrom}
          onChange={handleInput(setSumFrom)}
          onReset={resetInput(setSumFrom)}
        />
        <Input
          type="text"
          prefix={"до"}
          placeholder="₽"
          value={sumTo}
          onChange={handleInput(setSumTo)}
          onReset={resetInput(setSumTo)}
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
