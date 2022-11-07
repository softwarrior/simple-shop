import { Icon, IconType } from "../../../../../shared/components";

import styles from "./FilterLoader.module.css";

export const FilterLoader = ({ buttonText }) => (
  <div className={styles._}>
    <Icon className={styles.icon} iconType={IconType.refresh} />
    <span className={styles.span}>{buttonText}</span>
  </div>
);
