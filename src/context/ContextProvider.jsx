import { DarkModeContextProvider } from "./DarkModeContext";
import { LanguageContextProvider } from "./LanguageContext";
import { ProgressBarContextProvider } from "./ProgressBarContext";
import { WidthPageContextProvider } from "./WidthPageContext";
import { ThemeProvider, createTheme } from "@mui/material";

export function ContextProvider({ children }) {
  //Colores de material ui
  const theme = createTheme({
    palette: {
      whiteColor: {
        main: "rgb(150, 150, 150)", 
      },
    },
  });

  //Todos los contextos, para que no se haga muy grande App.jsx
  return (
    <ThemeProvider theme={theme}>
      <ProgressBarContextProvider>
        <WidthPageContextProvider>
          <LanguageContextProvider>
            <DarkModeContextProvider>{children}</DarkModeContextProvider>
          </LanguageContextProvider>
        </WidthPageContextProvider>
      </ProgressBarContextProvider>
    </ThemeProvider>
  );
}
