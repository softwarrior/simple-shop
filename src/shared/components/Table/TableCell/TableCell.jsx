import classnames from "classnames";

import { Icon } from "../../Icon/Icon";

import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  text,
  iconType = null,
  iconClassName = null,
}) => {
  return (
    <div className={className}>
      {!!iconType && (
        <Icon
          className={classnames(styles.icon, iconClassName)}
          iconType={iconType}
        />
      )}
      <span className={styles.cellText}>{text}</span>
    </div>
  );
};
