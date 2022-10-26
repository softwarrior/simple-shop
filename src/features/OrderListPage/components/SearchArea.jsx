import { Icon, IconType } from "../../../shared/components/Icon";

import styles from "./SearchArea.module.css";

export const SearchArea = ({ inputPlaceholder }) => (
  <div className={styles._}>
    <Icon className={styles.icon} type={IconType.search} />
    <input className={styles.inputField} placeholder={inputPlaceholder} />
  </div>
);
