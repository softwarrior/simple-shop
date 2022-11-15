import styles from "./Radio.module.css";

export const Radio = ({ name, value, title, onChange }) => {
  return (
    <label className={styles.control}>
      <input
        type="radio"
        className={styles.radio}
        name={name}
        value={value}
        onChange={() => onChange(value)}
      />
      <span className={styles.title}>{title}</span>
    </label>
  );
};
