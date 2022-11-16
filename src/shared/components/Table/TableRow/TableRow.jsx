import styles from "./TableRow.module.css";
import classnames from "classnames";

export const TableRow = ({ className, children }) => {
  return <div className={classnames(styles._, className)}>{children}</div>;
};
