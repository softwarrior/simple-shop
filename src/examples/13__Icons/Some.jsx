{
  /* svgr webpack plugin is enabled */
}
import { ReactComponent as StarIcon } from "../../app/logo.svg";

import styles from "./Some.module.css";

const Some = ({ title }) => {
  return (
    <div className={styles.some}>
      {/* svg like component */}
      <StarIcon stroke="#000" />
      <div className={styles.title}>{title}</div>
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return <Some />;
};
