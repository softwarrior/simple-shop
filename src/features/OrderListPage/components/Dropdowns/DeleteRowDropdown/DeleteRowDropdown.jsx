import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";
import { wordDeclension } from "../../../../../shared/utils";
import styles from "./DeleteRowDropdown.module.css";

export const DeleteRowDropdown = ({ isOpen, onCancel, onDelete, rowCount }) => {
  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });

  const wordRecord = wordDeclension(["запись", "записи", "записей"]);

  return (
    <div className={classNames}>
      <span className={styles.title}>{`Удалить ${rowCount} ${wordRecord(
        rowCount
      )}?`}</span>
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
