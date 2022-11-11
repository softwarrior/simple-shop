import classnames from "classnames";
import { useContext } from "react";
import { Input } from "../../../../../shared/components";

import { OrderListPageContext } from "../../../OrderListPage";

import styles from "./ChangePageDropdown.module.css";

export const ChangePageDropdown = ({
  title = "Номер страницы",
  placeholder = "Введите номер",
}) => {
  const { isPageDropdownOpen } = useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isPageDropdownOpen,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>{title}</span>
      <Input className={styles.input} placeholder={placeholder} />
    </div>
  );
};
