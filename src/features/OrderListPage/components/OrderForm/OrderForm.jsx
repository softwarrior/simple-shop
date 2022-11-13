import classnames from "classnames";
import { useSelector } from "react-redux";
import { getOrderById } from "../../model/orders";
import styles from "./OrderForm.module.css";

export const OrderForm = ({ isOpen, onClose, orderId }) => {
  const order = useSelector(getOrderById(orderId));

  const classNames = classnames(styles._, {
    [styles.hidden]: !isOpen,
  });

  return (
    <div className={classNames}>
      <div className={styles.window} onClick={onClose}>
        <h2 className={styles.header}>{`Заявка #${order?.orderNumber}`}</h2>
        <div className={styles.text}>тело заявки</div>
      </div>
    </div>
  );
};
