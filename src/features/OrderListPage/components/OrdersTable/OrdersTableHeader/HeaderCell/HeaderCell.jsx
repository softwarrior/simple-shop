import classnames from "classnames";
import {
  TableHeaderCell,
  Icon,
  IconType,
} from "../../../../../../shared/components";
import styles from "./HeaderCell.module.css";

export const HeaderCell = ({
  className,
  text,
  isIcon,
  onClick,
  isActive,
  direction,
}) => {
  const classNames = classnames(
    styles._,
    {
      [styles.tableHeaderOrderActive]: isActive,
      [styles.notPressed]: !isIcon,
    },
    className
  );
  const iconClassNames = classnames(styles.tableHeaderIcon, {
    [styles.iconRotate]: isActive && direction === -1,
  });
  return (
    <TableHeaderCell className={classNames} onClick={onClick}>
      <span className={styles.tableHeaderText}>{text}</span>
      {isIcon && (
        <Icon className={iconClassNames} iconType={IconType.v_arrow} />
      )}
    </TableHeaderCell>
  );
};
