import styles from "./TableHeader.module.css";

export const TableHeader = ({ prefix, cells }) => {
  return (
    <div className={styles.tableHeader}>
      {prefix}
      {cells}
    </div>
  );
};
