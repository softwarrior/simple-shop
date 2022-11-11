import { useContext } from "react";
import classnames from "classnames";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../../shared/components";
import {
  ThemeContext,
  ThemeType,
} from "../../../../ThemeContextProvider/ThemeContextProvider";
import styles from "./ChangeThemeDropdown.module.css";

export const ChangeThemeDropdown = ({ isOpen }) => {
  const { theme, onTheme } = useContext(ThemeContext);

  const classNames = classnames(styles._, {
    [styles.disabled]: !isOpen,
  });

  return (
    <div className={classNames}>
      <span className={styles.title}>Выберите тему</span>
      <Button
        buttonStyle={
          theme === ThemeType.light ? ButtonStyle.primary : ButtonStyle.reverse
        }
        size={ButtonSize.small}
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
        size={ButtonSize.small}
        iconType={IconType.moon}
        isAlign={true}
        onClick={() => onTheme(ThemeType.dark)}
      >
        Темная
      </Button>
    </div>
  );
};
