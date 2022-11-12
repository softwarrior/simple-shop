import classnames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { sortOrders } from "../../../../model/orders";

import {
  TableHeaderCell,
  Icon,
  IconType,
} from "../../../../../../shared/components";

import styles from "./HeaderCell.module.css";

export const HeaderCell = ({
  className,
  id,
  text,
  isIcon,
  onClick,
  isActive = false,
}) => {
  const [direction, setDirection] = useState(1);
  const dispatch = useDispatch();
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
  const handleOnClick = () => {
    if (!onClick) return;
    dispatch(sortOrders({ id: id, direction: -direction }));
    setDirection(-direction);
    onClick();
  };
  return (
    <TableHeaderCell className={classNames} onClick={handleOnClick}>
      <span className={styles.tableHeaderText}>{text}</span>
      {isIcon && (
        <Icon className={iconClassNames} iconType={IconType.v_arrow} />
      )}
    </TableHeaderCell>
  );
};
