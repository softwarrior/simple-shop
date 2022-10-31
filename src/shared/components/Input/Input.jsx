import classnames from "classnames";

import { Icon, IconType } from "../Icon/Icon";

const noop = () => {};

import styles from "./Input.module.css";

export const InputStyle = {
  dropdown: "dropdown",
  empty: "empty",
  correct: "correct",
  incorrect: "incorrect",
  disabled: "disabled",
};

export const Input = ({
  inputStyle,
  leftText = null,
  placeholder,
  value = null,
  onChange = noop,
  onClick = noop,
  className,
  children,
  ...props
}) => {
  const fieldClassNames = classnames(styles.field, {
    [styles.fieldEmpty]: inputStyle === InputStyle.empty,
    [styles.fieldIncorrect]: inputStyle === InputStyle.incorrect,
    [styles.fieldCorrect]: inputStyle === InputStyle.correct,
    [styles.fieldDisabled]: inputStyle === InputStyle.disabled,
    [styles.fieldDropdown]: inputStyle === InputStyle.dropdown,
  });
  const labelClassNames = classnames(styles._, className);
  const buttonClassNames = classnames(styles.button, {
    [styles.buttonDisabled]: inputStyle === InputStyle.empty,
  });
  let iconClassNames = classnames(styles.icon, {
    [styles.iconCorrect]: inputStyle === InputStyle.correct,
    [styles.iconDropdown]: inputStyle === InputStyle.dropdown,
    [styles.iconIncorrect]: inputStyle === InputStyle.incorrect,
    [styles.iconDisabled]: inputStyle === InputStyle.disabled,
  });

  let iconType = null;
  switch (inputStyle) {
    case InputStyle.dropdown:
      iconType = IconType.v_arrow;
      break;
    case InputStyle.empty:
      iconType = null;
      break;
    case InputStyle.incorrect:
      iconType = IconType.x_medium;
      break;
    case InputStyle.correct:
      iconType = IconType.x_medium;
      break;
    case InputStyle.disabled:
      iconType = IconType.locked;
      break;
  }

  const inputProps = {
    className: styles.area,
    placeholder,
    value,
    onClick,
    onChange,
    disabled: inputStyle === InputStyle.disabled,
    props,
  };
  if (!value) delete inputProps.value;

  return (
    <label className={labelClassNames}>
      <div className={styles.fieldName}>{children}</div>
      <div className={fieldClassNames}>
        {!!leftText && <span className={styles.leftText}>{leftText}</span>}
        <input {...inputProps} />
        <button className={buttonClassNames} onClick={onClick}>
          <Icon className={iconClassNames} iconType={iconType}></Icon>
        </button>
      </div>
    </label>
  );
};
