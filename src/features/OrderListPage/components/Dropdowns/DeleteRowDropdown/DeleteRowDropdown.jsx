import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";
import styles from "./DeleteRowDropdown.module.css";

export const DeleteRowDropdown = ({ isOpen, onCancel, onDelete }) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>Удалить n записей?</span>
      <Button
        buttonStyle={ButtonStyle.reverse}
        size={ButtonSize.small}
        isAlign={true}
        onClick={onDelete}
      >
        Удалить
      </Button>
      <Button
        buttonStyle={ButtonStyle.primary}
        size={ButtonSize.small}
        isAlign={true}
        onClick={onCancel}
      >
        Отмена
      </Button>
    </div>
  );
};
