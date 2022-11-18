import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";
import styles from "./CloseFormDropdown.module.css";

export const CloseFormDropdown = ({ className, isOpen, onClose, onLeave }) => {
  const classNames = classnames(
    styles._,
    {
      [styles.disabled]: !isOpen,
    },
    className
  );

  return (
    <div className={classNames}>
      <span className={styles.title}>Есть несохраненные изменения</span>
      <Button
        buttonStyle={ButtonStyle.reverse}
        size={ButtonSize.small}
        isAlign={true}
        onClick={onClose}
      >
        Сбросить
      </Button>
      <Button
        buttonStyle={ButtonStyle.primary}
        size={ButtonSize.small}
        isAlign={true}
        onClick={onLeave}
      >
        Остаться
      </Button>
    </div>
  );
};
