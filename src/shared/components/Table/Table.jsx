import styles from "./Table.module.css";

export const Table = ({ header, body, footer }) => (
  <div className={styles._}>
    {header}
    {body}
    {footer}
  </div>
);
