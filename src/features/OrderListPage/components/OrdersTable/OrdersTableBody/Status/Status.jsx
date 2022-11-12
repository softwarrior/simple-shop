import classnames from "classnames";

import { IconType, Icon } from "../../../../../../shared/components";

import styles from "./Status.module.css";

const statusName = {
  new: "Новый",
  calculation: "Рассчет",
  confirmed: "Подтвержден",
  postponed: "Отложен",
  completed: "Выполнен",
  declined: "Отменен",
};

const statusIcon = {
  completed: IconType.checkmark,
  declined: IconType.abort,
};

const statusStyle = {
  new: styles.iconPostponed,
  calculation: styles.iconCalculation,
  confirmed: styles.iconCompleted,
  postponed: styles.iconPostponed,
  completed: styles.iconCompleted,
  declined: styles.iconCanceled,
};

export const Status = ({ children }) => {
  return (
    <>
      <Icon
        className={classnames(styles.icon, statusStyle[children])}
        iconType={statusIcon[children] || IconType.dot}
      />
      <span className={classnames(styles.text, statusStyle[children])}>
        {statusName[children]}
      </span>
    </>
  );
};
