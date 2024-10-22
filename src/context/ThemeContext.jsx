import React, { createContext, useState, useMemo } from "react";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getColors from "../helpers/colors";
import { GlobalStyles } from "@mui/material";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true" || false
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      localStorage.setItem("darkMode", !prevMode);
      return !prevMode;
    });
  };

  const colors = getColors(darkMode ? "dark" : "light");

  const theme = useMemo(() => {
    const themeObj = createTheme({
      palette: {
        mode: darkMode ? "dark" : "light",
        background: {
          default: colors.defaultBg,  
        },
        text: {
          primary: colors.textDark,  
          secondary: colors.textDark,
        },
        custom: {  
          customPrimary: colors.primary,  
          customPrimaryTransparent: colors.primaryTransparent, 
          customAccent: colors.accent, 
          customAccentTransparent: colors.accentTransparent,  
          customTextLight: colors.textLight,  

        },
      },
      transitions: {
        duration: {
          shortest: 150,
        },
      },
    });
    return themeObj;
  }, [darkMode, colors]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              transition: "background-color 0.3s ease, color 0.3s ease",
            },
          }}
        />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
