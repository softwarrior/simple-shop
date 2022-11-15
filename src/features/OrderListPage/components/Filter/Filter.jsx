import { FilterSearchRow } from "./FilterSearchRow/FilterSearchRow";
import { FilterRow } from "./FilterRow/FilterRow";

import styles from "./Filter.module.css";
import { useState } from "react";
import { useEffect } from "react";

export const Filter = ({ onFilterAccept, onFilterReset, onFilterSearch }) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isFilterReset, setFilterReset] = useState(false);
  const handleFilterOpen = () => setFilterOpen(!isFilterOpen);
  const handleFilterReset = () => {
    setFilterReset(!isFilterReset);
    onFilterReset();
  };

  useEffect(() => {
    if (isFilterReset) setFilterReset(!isFilterReset);
  }, [isFilterReset]);

  return (
    <div className={styles._}>
      <FilterSearchRow
        isFilterOpen={isFilterOpen}
        onFilterOpen={handleFilterOpen}
        onFilterReset={handleFilterReset}
        onFilterSearch={onFilterSearch}
      />
      <FilterRow
        isFilterOpen={isFilterOpen}
        isFilterReset={isFilterReset}
        onFilterAccept={onFilterAccept}
      />
    </div>
  );
};
