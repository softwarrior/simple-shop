import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
} from "../../../../../shared/components";

import { OrderListPageContext } from "../../../OrderListPage";

import styles from "./DeleteRowDropdown.module.css";

export const DeleteRowDropdown = () => {
  const { isDeleteDropdownOpen } = useContext(OrderListPageContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isDeleteDropdownOpen,
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
