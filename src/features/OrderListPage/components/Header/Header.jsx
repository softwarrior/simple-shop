import { useContext } from "react";

import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../shared/components";

import { FilterThemeDropdown } from "../Filter/FilterThemeDropdown/FilterThemeDropdown";
import {
  ThemeContext,
  ThemeType,
} from "../../../ThemeContextProvider/ThemeContextProvider";

import { OrderListPageContext } from "../../OrderListPage";
import styles from "./Header.module.css";

export const Header = ({ title }) => {
  const { onThemeDropdownState } = useContext(OrderListPageContext);
  const { theme } = useContext(ThemeContext);

  let buttonText = theme == ThemeType.dark ? "Темная тема" : "Светлая тема";
  let iconType = theme == ThemeType.dark ? IconType.moon : IconType.sun;

  return (
    <div className={styles._}>
      <span className={styles.span}>{title}</span>
      <Button
        buttonStyle={ButtonStyle.reverse}
        buttonSize={ButtonSize.medium}
        iconType={iconType}
        isAlign={true}
        onClick={onThemeDropdownState}
      >
        {buttonText}
      </Button>
      <FilterThemeDropdown />
    </div>
  );
};
