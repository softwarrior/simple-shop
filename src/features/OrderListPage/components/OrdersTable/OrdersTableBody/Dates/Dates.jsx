import styles from "./Dates.module.css";

export const Dates = ({ children }) => {
  let date = Date.parse(children);
  let formatter = new Intl.DateTimeFormat("ru");
  return <span className={styles.text}>{formatter.format(date)}</span>;
};
