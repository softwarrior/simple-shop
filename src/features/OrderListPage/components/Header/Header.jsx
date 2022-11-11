import { useContext } from "react";
import {
  Button,
  ButtonSize,
  ButtonStyle,
  IconType,
} from "../../../../shared/components";
import { ChangeThemeDropdown } from "../Dropdowns/ChangeThemeDropdown/ChangeThemeDropdown";
import {
  ThemeContext,
  ThemeType,
} from "../../../ThemeContextProvider/ThemeContextProvider";
import styles from "./Header.module.css";
import { useState } from "react";

export const Header = ({ title }) => {
  const [isThemeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const handleThemeDropdownOpen = () =>
    setThemeDropdownOpen(!isThemeDropdownOpen);

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
        onClick={handleThemeDropdownOpen}
      >
        {buttonText}
      </Button>
      <ChangeThemeDropdown isOpen={isThemeDropdownOpen} />
    </div>
  );
};
