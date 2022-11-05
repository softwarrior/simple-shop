import styles from "./TableBody.module.css";

export const TableBody = ({ rows }) => {
  return (
    <div className={styles._}>
      <div className={styles.tableBodyCustomerList}>{rows}</div>
    </div>
  );
};
