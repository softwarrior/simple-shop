import classnames from "classnames";
import { useState } from "react";
import styles from "./OrderForm.module.css";

export const OrderForm = () => {
  const [isOrderFormOpen, setOrderFormOpen] = useState(false);

  const handleOrderFormOpen = () => setOrderFormOpen(!isOrderFormOpen);

  const classNames = classnames(styles._, {
    [styles.hidden]: !isOrderFormOpen,
  });

  return (
    <div className={classNames} onClick={handleOrderFormOpen}>
      <div className={styles.window}>
        <h2 className={styles.header}>Заголовок</h2>
        <div className={styles.text}>Какойт-то важный текст</div>
      </div>
    </div>
  );
};
