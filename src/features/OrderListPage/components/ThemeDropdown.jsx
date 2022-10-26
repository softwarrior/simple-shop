import { useContext } from "react";
import classnames from "classnames";

import { Span, SpanType } from "../../../shared/components/Span";
import { Button, ButtonType } from "../../../shared/components/Button";

import { OrderListPageContext, VisibilityType } from "../OrderListPage";
import { ThemeContext, ThemeType } from "../../ThemeContextProvider";

import locale from "../OrderListPage.locale";
import styles from "./ThemeDropdown.module.css";

export const ThemeDropdown = ({ className }) => {
  const { themeDropdownState } = useContext(OrderListPageContext);
  const { onTheme } = useContext(ThemeContext);

  let classNames = null;
  switch (themeDropdownState) {
    case VisibilityType.hide:
      classNames = classnames(styles._, className, styles.disabled);
      break;
    case VisibilityType.show:
      classNames = styles._;
      break;
    default:
      break;
  }

  return (
    <div className={classNames}>
      <div className={styles.form}>
        <Span type={SpanType.dropdownTitle}>Выберите тему</Span>
        <Button
          type={ButtonType.lightTheme}
          text={locale.lightThemText}
          onClick={() => onTheme(ThemeType.light)}
        />
        <Button
          type={ButtonType.darkTheme}
          text={locale.darkThemeText}
          onClick={() => onTheme(ThemeType.dark)}
        />
      </div>
    </div>
  );
};
