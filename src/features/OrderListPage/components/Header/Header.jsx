import { useContext } from "react";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../shared/components";

import { HeaderThemeDropdown } from "./HeaderThemeDropdown/HeaderThemeDropdown";
import {
  ThemeContext,
  ThemeType,
} from "../../../ThemeContextProvider/ThemeContextProvider";

import { OrderListPageContext } from "../../OrderListPage";
import styles from "./Header.module.css";

export const Header = ({ title }) => {
  const { isThemeDropdownOpen, onThemeDropdownOpen } =
    useContext(OrderListPageContext);
  const { theme } = useContext(ThemeContext);

  let buttonText = theme == ThemeType.dark ? "Темная тема" : "Светлая тема";
  let iconType = theme == ThemeType.dark ? IconType.moon : IconType.sun;

  return (
    <div className={styles._}>
      <span className={styles.span}>{title}</span>
      <Button
        buttonStyle={
          isThemeDropdownOpen ? ButtonStyle.primary : ButtonStyle.reverse
        }
        size={ButtonSize.medium}
        iconType={iconType}
        isAlign={true}
        onClick={onThemeDropdownOpen}
      >
        {buttonText}
      </Button>
      <HeaderThemeDropdown />
    </div>
  );
};
