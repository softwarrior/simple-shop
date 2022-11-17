import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";
import styles from "./DeleteRowDropdown.module.css";

export const DeleteRowDropdown = ({ isOpen }) => {
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
        onClick={() => {}}
      >
        Удалить
      </Button>
      <Button
        buttonStyle={ButtonStyle.primary}
        size={ButtonSize.small}
        isAlign={true}
        onClick={() => {}}
      >
        Отмена
      </Button>
    </div>
  );
};
