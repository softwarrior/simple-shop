import React from "react";

import { Icon, IconType } from "../Icon/Icon";

import styles from "./Checkbox.module.css";

const noop = () => {};

export const Checkbox = ({
  labelClassName = styles.control,
  divClassName = styles.checkboxGroup,
  className = styles.checkbox,
  iconClassName = styles.checkboxIcon,
  iconType = IconType.checkmark,
  spanClassName = styles.checkboxTitle,
  title = "",
  onChange = noop,
  checked = null,
}) => {
  return (
    <Optional
      element={{ name: "label" }}
      check={() => !!labelClassName}
      className={labelClassName}
    >
      <Optional
        element={{ name: "div" }}
        check={() => !!divClassName}
        className={divClassName}
      >
        <input
          type="checkbox"
          className={className}
          onChange={onChange}
          checked={checked}
        />
        <Optional
          element={{ type: Icon }}
          check={() => !!iconType}
          className={iconClassName}
          iconType={iconType}
        />
      </Optional>
      <Optional
        element={{ name: "span" }}
        check={() => !!title}
        className={spanClassName}
      >
        {title}
      </Optional>
    </Optional>
  );
};

const Optional = ({ element, check = noop, children, ...props }) => {
  const Element = element.type
    ? element.type
    : React.createElement(element.name).type;
  return (
    <>{check() ? <Element {...props}>{children}</Element> : <>{children}</>}</>
  );
};
