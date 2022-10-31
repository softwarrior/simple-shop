import { Icon, IconType } from "../Icon/Icon";

import styles from "./Searchbar.module.css";

export function Searchbar({ placeholder, value, onChange, onReset, ...props }) {
  return (
    <div className={styles._}>
      <input
        className={styles.area}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="text"
        name=""
        id=""
        {...props}
      />
      <Icon iconType={IconType.search} className={styles.iconFind} />
      <button type="button" className={styles.buttonDelete} onClick={onReset}>
        <Icon iconType={IconType.x_medium} className={styles.iconDelete} />
      </button>
    </div>
  );
}
