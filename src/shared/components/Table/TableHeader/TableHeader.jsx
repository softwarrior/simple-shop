import styles from "./TableHeader.module.css";

export const TableHeader = ({ children }) => {
  return <div className={styles.tableHeader}>{children}</div>;
};
