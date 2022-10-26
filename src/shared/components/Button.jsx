import classnames from "classnames";

import { Span, SpanType } from "./Span";
import { Icon, IconType } from "./Icon";

import styles from "./Button.module.css";

export const ButtonType = {
  mode: {
    className: styles.headerButton,
    icon: { className: IconType.styles.pageHeader, type: IconType.sun },
    span: { type: SpanType.headerButton },
  },
  filter: {
    className: styles.filterRowButton,
    icon: { className: IconType.styles.filterRow, type: IconType.filter },
    span: { type: SpanType.filterRowText },
  },
  filterRowInput: {
    className: styles.filterRowInputButton,
    icon: { className: IconType.styles.filterRowInput },
  },
  filterReset: {
    className: styles.filterRowButtonReset,
    span: { type: SpanType.filterRowButtonReset },
  },
  searchArea: {
    className: styles.searchbarButtonEndLine,
    icon: { className: IconType.styles.searchbar, type: IconType.incorrect },
  },
  disabled: {
    className: styles.disabled,
  },
  lightTheme: {
    className: classnames(
      styles.button,
      styles.buttonSmall,
      styles.buttonColorReverse,
      styles.buttonAlign
    ),
    icon: { className: styles.buttonIcon, type: IconType.sun },
    span: { className: styles.buttonText },
  },
  darkTheme: {
    className: classnames(
      styles.button,
      styles.buttonSmall,
      styles.buttonColorPrimary,
      styles.buttonAlign
    ),
    icon: { className: styles.buttonIcon, type: IconType.moon },
    span: { className: styles.buttonText },
  },
};

const noop = () => {};

export const SimpleButton = ({
  buttonClassName,
  iconClassName,
  iconType,
  spanType,
  text,
  onClick = noop,
}) => (
  <button type="button" className={buttonClassName} onClick={onClick}>
    {!!iconType && <Icon className={iconClassName} type={iconType} />}
    {!!spanType && <Span type={spanType}>{text}</Span>}
  </button>
);

export const Button = ({
  type,
  text = null,
  iconType = null,
  className = null,
  onClick = noop,
}) => (
  <SimpleButton
    buttonClassName={classnames(type.className, className)}
    iconClassName={type.icon?.className}
    iconType={iconType ? iconType : type.icon?.type}
    spanType={type.span?.type}
    text={text}
    onClick={onClick}
  ></SimpleButton>
);

export const StyledButton = ({
  buttonClassName,
  iconClassName,
  iconType,
  spanType,
  text,
  onClick = noop,
  ...props
}) => (
  <div {...props}>
    <SimpleButton
      buttonClassName={buttonClassName}
      iconClassName={iconClassName}
      iconType={iconType}
      spanType={spanType}
      text={text}
      onClick={onClick}
    ></SimpleButton>
  </div>
);
