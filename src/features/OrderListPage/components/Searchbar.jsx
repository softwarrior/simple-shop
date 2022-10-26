import { Button, ButtonType } from "../../../shared/components/Button";

import { SearchArea } from "./SearchArea";

import locale from "../OrderListPage.locale";
import styles from "./Searchbar.module.css";

export const Searchbar = () => (
  <label className={styles.label}>
    <div className={styles._}>
      <SearchArea inputPlaceholder={locale.searchAreaPlaceholder} />
      <Button type={ButtonType.searchArea} />
    </div>
  </label>
);
