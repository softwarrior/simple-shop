import { useContext } from "react";
import classnames from "classnames";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../../shared/components";

import { OrderListPageContext } from "../../../OrderListPage";
import {
  ThemeContext,
  ThemeType,
} from "../../../../ThemeContextProvider/ThemeContextProvider";

import styles from "./HeaderThemeDropdown.module.css";

export const HeaderThemeDropdown = () => {
  const { isThemeDropdownOpen } = useContext(OrderListPageContext);
  const { theme, onTheme } = useContext(ThemeContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isThemeDropdownOpen,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>Выберите тему</span>
      <Button
        buttonStyle={
          theme === ThemeType.light ? ButtonStyle.primary : ButtonStyle.reverse
        }
        buttonSize={ButtonSize.small}
        iconType={IconType.sun}
        isAlign={true}
        onClick={() => onTheme(ThemeType.light)}
      >
        Cветлая
      </Button>
      <Button
        buttonStyle={
          theme == ThemeType.dark ? ButtonStyle.primary : ButtonStyle.reverse
        }
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
