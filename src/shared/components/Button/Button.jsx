import classnames from "classnames";

import { Icon } from "../Icon/Icon";

import styles from "./Button.module.css";

export const ButtonSize = {
  small: "small",
  medium: "medium ",
};

export const ButtonStyle = {
  primary: "primary",
  reverse: "reverse",
  secondary: "secondary",
  transparent: "transparent",
  inactive: "inactive",
  danger: "danger",
};

const noop = () => {};

export const Button = ({
  isAlign = false,
  buttonStyle = ButtonStyle.primary,
  size = ButtonSize.medium,
  iconType = null,
  onClick = noop,
  className,
  disabled = false,
  children,
  ...props
}) => {
  if (disabled) {
    buttonStyle = ButtonStyle.inactive;
  }
  const classNames = classnames(
    styles.button,
    {
      [styles.buttonAlign]: isAlign === true,
      [styles.buttonPrimary]: buttonStyle === ButtonStyle.primary,
      [styles.buttonReverse]: buttonStyle === ButtonStyle.reverse,
      [styles.buttonSecondary]: buttonStyle === ButtonStyle.secondary,
      [styles.buttonTransparent]: buttonStyle === ButtonStyle.transparent,
      [styles.buttonInactive]: buttonStyle === ButtonStyle.inactive,
      [styles.buttonDanger]: buttonStyle === ButtonStyle.danger,
      [styles.buttonSmall]: size === ButtonSize.small,
      [styles.buttonMedium]: size === ButtonSize.medium,
    },
    className
  );
  return (
    <button className={classNames} type="button" onClick={onClick} {...props}>
      {iconType && <Icon iconType={iconType} className={styles.buttonIcon} />}
      {children && <span className={styles.buttonText}>{children}</span>}
    </button>
  );
};
