import { useContext } from "react";

import { Button, ButtonType } from "../../../shared/components/Button";

import { Searchbar } from "./Searchbar";
import { FilterLoader } from "./FilterLoader";

import { OrderListPageContext, VisibilityType } from "../OrderListPage";
import locale from "../OrderListPage.locale";
import styles from "./FilterSearchRow.module.css";

export const FilterSearchRow = () => {
  const { filterState, onFilterState, onFilterReset } =
    useContext(OrderListPageContext);

  let className = null;
  switch (filterState) {
    case VisibilityType.hide:
      className = styles.disabled;
      break;
    case VisibilityType.show:
      className = null;
      break;
    default:
      break;
  }

  return (
    <div className={styles._}>
      <div className={styles.form}>
        <Searchbar />
        <Button
          type={ButtonType.filter}
          text={locale.filterButtonText}
          onClick={onFilterState}
        />
        <Button
          className={className}
          type={ButtonType.filterReset}
          text={locale.filterButtonResetText}
          onClick={onFilterReset}
        />
      </div>
      <FilterLoader buttonText={locale.filterLoaderButtonText} />
    </div>
  );
};
