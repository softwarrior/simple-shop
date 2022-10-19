import classnames from "classnames";

import styles from "./Some.module.css";

const Some = ({ title, isDanger }) => {
  const blockClass = classnames(styles.some, {
    // modifer depends on the props
    [styles.danger]: isDanger,
  });

  return (
    <div className={blockClass}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <div>
      {/* isDanger === undefined */}
      <Some title="Привет, ученики!" />
      {/* isDanger === true */}
      <Some title="Привет, ученики!" isDanger={true} />
      {/* isDanger === true */}
      <Some title="Привет, ученики!" isDanger />
    </div>
  );
};
