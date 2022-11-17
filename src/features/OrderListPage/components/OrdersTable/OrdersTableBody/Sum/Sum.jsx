import styles from "./Sum.module.css";

export const Sum = ({ currency, children }) => {
  let formatter = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
  });

  return <span className={styles.text}>{formatter.format(children)}</span>;
};
