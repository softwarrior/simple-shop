import { Span, SpanType } from "./Span";
import { Button, ButtonType } from "./Button";

import styles from "./Input.module.css";

export const InputType = {
  filterRow: {
    id: null,
    type: null,
    placeholder: null,
    defaultValue: null,
    className: styles.filterRowInput,
    button: { type: ButtonType.filterRowInput, className: null },
    span: { type: SpanType.filterRowFromToText },
  },
};

const noop = () => {};

export const Input = ({
  className,
  leftText,
  iconType,
  type,
  children,
  value,
  onClick = noop,
  onInputClick = noop,
  readOnly = false,
}) => {
  const inputProps = {
    id: type.id,
    className: type.className,
    type: type.type,
    placeholder: type.placeholder,
    value: value,
    defaultValue: type.defaultValue,
    readOnly: readOnly,
  };
  if (value) delete inputProps.defaultValue;
  return (
    <div className={className}>
      {!!type.span && <Span type={type.span?.type}>{leftText}</Span>}
      <input {...inputProps} onClick={onInputClick} />
      {!!iconType && (
        <Button
          type={ButtonType.filterRowInput}
          iconType={iconType}
          className={type.button?.className}
          onClick={onClick}
        ></Button>
      )}
      {children}
    </div>
  );
};
