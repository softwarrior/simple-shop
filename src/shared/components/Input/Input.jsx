import classnames from "classnames";

import { Icon, IconType } from "../Icon/Icon";

const noop = () => {};

import styles from "./Input.module.css";

export const Input = ({
  title = null,
  prefix,
  placeholder,
  value,
  onChange = noop,
  onClick = noop,
  onReset = noop,
  disabled = false,
  corrected = true,
  className,
  iconType = null,
  ...props
}) => {
  const fieldClassNames = classnames(styles.field, {
    [styles.fieldIncorrect]: !corrected,
    [styles.fieldCorrect]: corrected,
    [styles.fieldDisabled]: disabled,
  });

  const classNames = classnames(styles._, className);

  let iconClassNames = classnames(styles.icon, {
    [styles.iconCorrect]: corrected,
    [styles.iconIncorrect]: !corrected,
    [styles.iconDisabled]: disabled,
  });

  if (!iconType) {
    iconType = disabled ? IconType.locked : IconType.x_medium;
  }

  return (
    <label className={classNames}>
      {!!title && <div className={styles.fieldName}>{title}</div>}
      <div className={fieldClassNames}>
        {!!prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          className={styles.area}
          placeholder={placeholder}
          value={value === null ? "" : value}
          onClick={onClick}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
        {!!iconType && value && !disabled && (
          <button className={styles.button} onClick={onReset}>
            <Icon className={iconClassNames} iconType={iconType}></Icon>
          </button>
        )}
        {!!iconType && value && disabled && (
          <Icon className={iconClassNames} iconType={iconType}></Icon>
        )}
      </div>
    </label>
  );
};
