import styles from "./Table.module.css";
import classnames from "classnames";

export const Table = ({ className, children }) => (
  <div className={classnames(styles._, className)}>{children}</div>
);
