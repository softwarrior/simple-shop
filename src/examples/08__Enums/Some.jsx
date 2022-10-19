import classnames from "classnames";

import styles from "./Some.module.css";

// enums
const someTypes = {
  danger: "danger",
  info: "info",
  warning: "warning",
};

const Some = ({
  alertType = someTypes.info, // default type
  isDisabled = false,
  title,
}) => {
  const blockClass = classnames(styles.some, {
    [styles.disabled]: isDisabled,

    // enums
    [styles.danger]: alertType === someTypes.danger,
    [styles.warning]: alertType === someTypes.warning,
    [styles.info]: alertType === someTypes.info,
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
      {/* alertType === someTypes.info */}
      <Some title="Привет, ученики!1" />
      {/* alertType === someTypes.danger */}
      <Some alertType={someTypes.warning} title="Привет, ученики!2" />
      {/* combain with other props */}
      <Some
        alertType={someTypes.danger}
        isDisabled={true}
        title="Привет, ученики!3"
      />
    </div>
  );
};
