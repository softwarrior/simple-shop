import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../../shared/components";

import { OrderListPageContext, VisibilityType } from "../../../OrderListPage";
import {
  ThemeContext,
  ThemeType,
} from "../../../../ThemeContextProvider/ThemeContextProvider";

import styles from "./FilterThemeDropdown.module.css";

export const FilterThemeDropdown = () => {
  const { themeDropdownState } = useContext(OrderListPageContext);
  const { onTheme } = useContext(ThemeContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: themeDropdownState === VisibilityType.hide,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>Выберите тему</span>
      <Button
        buttonStyle={ButtonStyle.reverse}
        buttonSize={ButtonSize.small}
        iconType={IconType.sun}
        isAlign={true}
        onClick={() => onTheme(ThemeType.light)}
      >
        Cветлая
      </Button>
      <Button
        buttonStyle={ButtonStyle.primary}
        buttonSize={ButtonSize.small}
        iconType={IconType.moon}
        isAlign={true}
        onClick={() => onTheme(ThemeType.dark)}
      >
        Темная
      </Button>
    </div>
  );
};
