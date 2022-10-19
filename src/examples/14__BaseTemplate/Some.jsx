import classnames from "classnames";

import styles from "./Some.module.css";

// base:
//  className
//  ...props
const Some = ({ className, title, ...props }) => {
  const blockClass = classnames(styles.some, {
    [className]: !!className,
  });

  return (
    <div className={blockClass} {...props}>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return <Some className="subtitle" title="Заголовок" />;
};
