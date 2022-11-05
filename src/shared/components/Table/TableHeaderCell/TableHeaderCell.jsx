import { Icon, IconType } from "../../Icon/Icon";

import styles from "./TableHeaderCell.module.css";

export const TableHeaderCell = ({ className, text, isIcon = true }) => {
  return (
    <div className={className}>
      <span className={styles.tableHeaderText}>{text}</span>
      {isIcon && (
        <Icon className={styles.tableHeaderIcon} iconType={IconType.v_arrow} />
      )}
    </div>
  );
};
