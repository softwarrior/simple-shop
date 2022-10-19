import styles from "./Some.module.css";

const Some = ({ title, ...props }) => {
  return (
    <div className={styles.some} {...props}>
      <div className={styles.title}>{title}</div>
      {props.children}
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <div>
      <Some title="Привет, ученики!">
        <Some title="Привет, ученики1!" />
      </Some>
      {/* ...props */}
      {/* https://reactjs.org/docs/dom-elements.html */}
      <Some title="Привет, ученики!" tabIndex="-1" />
    </div>
  );
};
