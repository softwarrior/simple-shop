import { FilterSearchRow } from "./FilterSearchRow/FilterSearchRow";
import { FilterRow } from "./FilterRow/FilterRow";

import styles from "./Filter.module.css";
import { useState } from "react";
import { useEffect } from "react";

export const Filter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFilterReset, setFilterReset] = useState(false);
  const handleFilterOpen = () => setFilterOpen(!isFilterOpen);
  const handleFilterReset = () => setFilterReset(!isFilterReset);

  useEffect(() => {
    if (isFilterReset) setFilterReset(!isFilterReset);
  }, [isFilterReset]);

  return (
    <div className={styles._}>
      <FilterSearchRow
        isFilterOpen={isFilterOpen}
        onFilterOpen={handleFilterOpen}
        onFilterReset={handleFilterReset}
      />
      <FilterRow
        isFilterOpen={isFilterOpen}
        isFilterReset={isFilterReset}
        onFilterReset={handleFilterReset}
      />
    </div>
  );
};
