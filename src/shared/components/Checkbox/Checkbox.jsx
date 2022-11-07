import { Icon, IconType } from "../Icon/Icon";

import styles from "./Checkbox.module.css";

const noop = () => {};

export const Checkbox = ({
  className = styles.control,
  iconType = IconType.checkmark,
  title = "",
  onChange = noop,
  checked = null,
}) => {
  return (
    <label className={className}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={onChange}
        checked={checked}
      />
      {!!iconType && (
        <Icon className={styles.checkboxIcon} iconType={iconType} />
      )}
      {!!title && <span className={styles.checkboxTitle}>{title}</span>}
    </label>
  );
};
