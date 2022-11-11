import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { Checkbox } from "../../../../../shared/components";
import { getStatus, setFilter } from "../../../model/ordersFilter";
import styles from "./FilterStatusDropdown.module.css";

const DropdownStates = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

export const FilterStatusDropdown = ({ isOpen }) => {
  const dispatch = useDispatch();

  const createHandle = (value) => () =>
    dispatch(setFilter({ filter: "status", value: value }));
  const status = useSelector(getStatus);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });

  return (
    <div className={classNames}>
      <div className={styles.form}>
        <ul className={styles.list}>
          {Object.entries(DropdownStates).map(([key, value]) => (
            <li key={key} className={styles.item}>
              <Checkbox
                title={value}
                onChange={createHandle(key)}
                checked={status.includes(key)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
