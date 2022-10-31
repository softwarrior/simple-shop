import { FilterSearchRow } from "./FilterSearchRow/FilterSearchRow";
import { FilterRow } from "./FilterRow/FilterRow";

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
