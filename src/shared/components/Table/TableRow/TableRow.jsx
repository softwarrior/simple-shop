import styles from "./TableRow.module.css";

export const TableRow = ({ prefix, cells }) => {
  return (
    <div className={styles._}>
      {prefix}
      {cells}
    </div>
  );
};
