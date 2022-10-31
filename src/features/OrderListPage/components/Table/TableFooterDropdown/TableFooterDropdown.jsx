import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";

import styles from "./TableFooterDropdown.module.css";

export const TableFooterDropdown = () => {
  return (
    <div className={styles._}>
      <span className={styles.title}>Удалить n записей?</span>
      <Button
        buttonStyle={ButtonStyle.reverse}
        buttonSize={ButtonSize.small}
        isAlign={true}
        onClick={() => {}}
      >
        Удалить
      </Button>
      <Button
        buttonStyle={ButtonStyle.primary}
        buttonSize={ButtonSize.small}
        isAlign={true}
        onClick={() => {}}
      >
        Отмена
      </Button>
    </div>
  );
};
