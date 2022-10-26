import { FilterSearchRow } from "./FilterSearchRow";
import { FilterRow } from "./FilterRow";

import styles from "./Filter.module.css";

export const Filter = ({ children }) => {
  return (
    <div className={styles._}>
      <FilterSearchRow />
      <FilterRow />
      {children}
    </div>
  );
};
