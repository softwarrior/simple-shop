import styles from "./Dates.module.css";

export const Dates = ({ children }) => {
  const date = Date.parse(children);
  const formatter = new Intl.DateTimeFormat("ru");
  return <span className={styles.text}>{formatter.format(date)}</span>;
};
