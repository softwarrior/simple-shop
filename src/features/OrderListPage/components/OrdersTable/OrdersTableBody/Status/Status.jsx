import classnames from "classnames";
import { IconType, Icon } from "../../../../../../shared/components";
import styles from "./Status.module.css";
import { STATUS_NAME } from "../../../../OrderListPage.constants";

const STATUS_ICON = {
  completed: IconType.checkmark,
  declined: IconType.abort,
};

const STATUS_ICON_STYLE = {
  new: styles.iconNew,
  calculation: styles.iconCalculation,
  confirmed: styles.iconConfirmed,
  postponed: styles.iconPostponed,
  completed: styles.iconCompleted,
  declined: styles.iconDeclined,
};

const STATUS_TEXT_STYLE = {
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
        className={classnames(styles.icon, STATUS_ICON_STYLE[children])}
        iconType={STATUS_ICON[children] || IconType.dot}
      />
      <span className={classnames(styles.text, STATUS_TEXT_STYLE[children])}>
        {STATUS_NAME[children]}
      </span>
    </>
  );
};
