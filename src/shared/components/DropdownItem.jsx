import { Checkbox } from "./Checkbox";

import styles from "./DropdownItem.module.css";

const noop = () => {};

export const DropdownItem = ({
  itemText,
  onChange = noop,
  checked = false,
  position = 0,
}) => (
  <li className={styles.item}>
    <Checkbox
      title={itemText}
      position={position}
      onChange={() => onChange(position)}
      checked={checked}
    />
  </li>
);
