import { useState } from "react";
import styles from "./Some.module.css";

// empty function
const noop = () => {};

const Some = ({ onChange = noop, title = "", value: initialValue = "" }) => {
  // state
  const [value, setValue] = useState(initialValue);

  // handlers
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;

    setValue(value); // set state
    onChange(value); // callback
  };

  return (
    <div className={styles.some}>
      <div className={styles.title}>{title}</div>
      <input onChange={handleChange} value={value} />
    </div>
  );
};

// ----------------------------------------
// usage
export const App = () => {
  return (
    <>
      {/* set state only */}
      <Some title="Заголовок1" />
      {/* set state and callback */}
      <Some
        title="Заголовок2"
        value={"some value"}
        onChange={(value) => console.log(value)}
      />
    </>
  );
};
