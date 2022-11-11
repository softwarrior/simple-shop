import styles from "./Radio.module.css";

export const Radio = ({ name, value, title }) => {
  return (
    <label className={styles.control}>
      <input type="radio" className={styles.radio} name={name} value={value} />
      <span className={styles.title}>{title}</span>
    </label>
  );
};
