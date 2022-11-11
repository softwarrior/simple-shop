import { FilterSearchRow } from "./FilterSearchRow/FilterSearchRow";
import { FilterRow } from "./FilterRow/FilterRow";

import styles from "./Filter.module.css";
import { useState } from "react";

export const Filter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const handleFilterOpen = () => setFilterOpen(!isFilterOpen);

  return (
    <div className={styles._}>
      <FilterSearchRow
        isFilterOpen={isFilterOpen}
        onFilterOpen={handleFilterOpen}
      />
      <FilterRow isFilterOpen={isFilterOpen} />
    </div>
  );
};
