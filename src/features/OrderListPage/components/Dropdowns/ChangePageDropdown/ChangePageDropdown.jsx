import classnames from "classnames";
import { Input } from "../../../../../shared/components";
import styles from "./ChangePageDropdown.module.css";

export const ChangePageDropdown = ({
  isOpen,
  title = "Номер страницы",
  placeholder = "Введите номер",
}) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>{title}</span>
      <Input className={styles.input} placeholder={placeholder} />
    </div>
  );
};
