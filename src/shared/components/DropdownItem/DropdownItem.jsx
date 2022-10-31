import { Checkbox } from "../Checkbox/Checkbox";

import styles from "./DropdownItem.module.css";

const noop = () => {};

export const DropdownItem = ({
  itemText,
  onChange = noop,
  checked = false,
}) => (
  <li className={styles.item}>
    <Checkbox title={itemText} onChange={onChange} checked={checked} />
  </li>
);
