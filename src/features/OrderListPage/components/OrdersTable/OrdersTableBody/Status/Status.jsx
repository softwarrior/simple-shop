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

const statusIconStyle = {
  new: styles.iconNew,
  calculation: styles.iconCalculation,
  confirmed: styles.iconConfirmed,
  postponed: styles.iconPostponed,
  completed: styles.iconCompleted,
  declined: styles.iconDeclined,
};

const statusTextStyle = {
  new: styles.textNew,
  calculation: styles.textCalculation,
  confirmed: styles.textConfirmed,
  postponed: styles.textPostponed,
  completed: styles.textCompleted,
  declined: styles.textDeclined,
};

export const Status = ({ children }) => {
  return (
    <>
      <Icon
        className={classnames(styles.icon, statusIconStyle[children])}
        iconType={statusIcon[children] || IconType.dot}
      />
      <span className={classnames(styles.text, statusTextStyle[children])}>
        {statusName[children]}
      </span>
    </>
  );
};
