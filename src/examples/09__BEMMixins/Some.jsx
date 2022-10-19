import classnames from "classnames";

import styles from "./Some.module.css";

const Some = ({
  title,
  isDanger,
  className, // for BEM mixin
}) => {
  const blockClass = classnames(styles.some, {
    [styles.danger]: isDanger,

    // block, but in same time === element for parent block
    [className]: !!className,
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
      <Some />
      <Some
        className="app__some" /* mixin: Some is element for App */
        title="Привет, ученики!"
      />
    </div>
  );
};
