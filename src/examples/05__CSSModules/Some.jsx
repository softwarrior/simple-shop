import styles from "./Some.module.css"; // CSS modules

const Some = ({ title }) => (
  <div className={`${styles.some} ${styles.danger}`}>
    <div className={styles.title}>{title}</div>
  </div>
);

// ----------------------------------------
// usage
export const App = () => {
  return <Some title="Привет, ученики!" />;
};
