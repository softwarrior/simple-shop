import classnames from "classnames";

import { Icon, IconType } from "../Icon/Icon";

const noop = () => {};

import styles from "./Input.module.css";

export const InputStyle = {
  empty: "empty",
  correct: "correct",
  incorrect: "incorrect",
  disabled: "disabled",
};

export const Input = ({
  inputStyle,
  title = null,
  prefix,
  placeholder,
  value,
  onChange = noop,
  onClick = noop,
  onButtonClick = noop,
  className,
  iconType = null,
  ...props
}) => {
  const fieldClassNames = classnames(styles.field, {
    [styles.fieldEmpty]: inputStyle === InputStyle.empty,
    [styles.fieldIncorrect]: inputStyle === InputStyle.incorrect,
    [styles.fieldCorrect]: inputStyle === InputStyle.correct,
    [styles.fieldDisabled]: inputStyle === InputStyle.disabled,
  });

  const classNames = classnames(styles._, className);

  const buttonClassNames = classnames(styles.button, {
    [styles.buttonDisabled]: inputStyle === InputStyle.empty,
  });

  let iconClassNames = classnames(styles.icon, {
    [styles.iconCorrect]: inputStyle === InputStyle.correct,
    [styles.iconIncorrect]: inputStyle === InputStyle.incorrect,
    [styles.iconDisabled]: inputStyle === InputStyle.disabled,
  });

  iconType = iconType
    ? iconType
    : inputStyle === InputStyle.empty
    ? null
    : inputStyle === InputStyle.disabled
    ? IconType.locked
    : IconType.x_medium;

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
          disabled={inputStyle === InputStyle.disabled}
          {...props}
        />
        {!!iconType && (
          <button className={buttonClassNames} onClick={onButtonClick}>
            <Icon className={iconClassNames} iconType={iconType}></Icon>
          </button>
        )}
      </div>
    </label>
  );
};
