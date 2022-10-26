import { useContext } from "react";

import { Span, SpanType } from "../../../shared/components/Span";
import { Button, ButtonType } from "../../../shared/components/Button";
import { IconType } from "../../../shared/components/Icon";

import { ThemeDropdown } from "./ThemeDropdown";
import { ThemeContext, ThemeType } from "../../ThemeContextProvider";

import { OrderListPageContext } from "../OrderListPage";
import locale from "../OrderListPage.locale";
import styles from "./Header.module.css";

export const Header = ({ title }) => {
  const { onThemeDropdownState } = useContext(OrderListPageContext);
  const { theme } = useContext(ThemeContext);

  let buttonText = null;
  let buttonType = ButtonType.mode;

  switch (theme) {
    case ThemeType.dark:
      buttonText = locale.darkTheme;
      buttonType.icon.type = IconType.moon;
      break;
    case ThemeType.light:
      buttonText = locale.lightTheme;
      buttonType.icon.type = IconType.sun;
      break;
  }

  return (
    <div className={styles._}>
      <Span type={SpanType.headerTitle}>{title}</Span>
      <div className={styles.wrapper}>
        <Button
          type={buttonType}
          text={buttonText}
          onClick={onThemeDropdownState}
        />
        <ThemeDropdown />
      </div>
    </div>
  );
};
