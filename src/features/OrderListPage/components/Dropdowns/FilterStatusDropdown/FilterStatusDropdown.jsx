import classnames from "classnames";
import { Checkbox } from "../../../../../shared/components";
import styles from "./FilterStatusDropdown.module.css";
import { STATUS_NAME } from "../../../OrderListPage.constants";

export const FilterStatusDropdown = ({ isOpen, status, onChange }) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });
  return (
    <div className={classNames}>
      <div className={styles.form}>
        <ul className={styles.list}>
          {Object.entries(STATUS_NAME).map(([key, value]) => (
            <li key={key} className={styles.item}>
              <Checkbox
                title={value}
                onChange={() => onChange(key)}
                checked={status.includes(key)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
