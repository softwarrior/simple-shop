import { Icon, IconType } from "./Icon";
import { Span, SpanType } from "./Span";

import styles from "./Checkbox.module.css";

const noop = () => {};

export const Checkbox = ({
  title,
  onChange = noop,
  checked = false,
  position = 0,
}) => (
  <label className={styles.control}>
    <div className={styles.checkboxGroup}>
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={() => onChange(position)}
        checked={checked}
      />
      <Icon className={styles.checkboxIcon} type={IconType.checkmark} />
    </div>
    {!!title && <Span type={SpanType.checkboxTitle}>{title}</Span>}
  </label>
);
