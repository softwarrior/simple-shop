import classnames from "classnames";
import { Radio } from "../../../../../shared/components";
import styles from "./ChangeStatusDropdown.module.css";
import { STATUS_NAME } from "../../../OrderListPage.constants";

export const ChangeStatusDropdown = ({
  className,
  isOpen,
  onChange,
  name = "dropdownStatus",
}) => {
  const classNames = classnames(
    styles._,
    {
      [styles.disabled]: !isOpen,
    },
    className
  );
  return (
    <div className={classNames}>
      <ul className={styles.list}>
        {Object.entries(STATUS_NAME).map(([key, value]) => (
          <li key={key} className={styles.item}>
            <Radio title={value} value={key} name={name} onChange={onChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};
