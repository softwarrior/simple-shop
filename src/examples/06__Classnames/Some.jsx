// classnames
//import classnames from 'classnames';

import styles from "./Some.module.css";

const Some = ({ title }) => {
  // classnames helps to concat strings
  const blockClass = classnames(styles.some, styles.danger);

  return (
    <div className={blockClass}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return <Some title="Привет, ученики!" />;
};

const classnames = (obj) => {
  let result = "";
  for (const p in obj) {
    if (obj[p] != true) continue;
    result += String(` ${p}`);
  }
  return result;
};
