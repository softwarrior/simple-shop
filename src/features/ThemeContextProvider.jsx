import { createContext, useState, useMemo } from "react";

export const ThemeType = {
  dark: "dark",
  light: "light",
};

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeType.light);

  document.documentElement.dataset.theme = theme;

  const handleTheme = (currentTheme) => {
    setTheme(currentTheme);
    document.documentElement.dataset.theme = currentTheme;
  };

  const value = useMemo(() => {
    return {
      theme,
      onTheme: handleTheme,
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
