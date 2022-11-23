import styles from "./TableFooter.module.css";
import classnames from "classnames";

export const TableFooter = ({ className, children }) => {
  return <div className={classnames(styles._, className)}>{children}</div>;
};
