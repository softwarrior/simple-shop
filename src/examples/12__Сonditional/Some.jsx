import styles from "./Some.module.css";

const Some = ({ isOpen = false, isWide = true, title }) => {
  return (
    <div className={styles.some}>
      <div className={styles.title}>{title}</div>

      {isOpen && <div>Блок информации</div>}

      {/* with ? */}
      {isWide ? <div>Широкий блок</div> : <div>Какой-то другой блок</div>}

      {/* without ? */}
      {isWide && <div>Комментарий</div>}
      {!isWide && <div>Что-то другое</div>}
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <div>
      <Some title="Привет, ученики!" isWide={true} />
    </div>
  );
};
