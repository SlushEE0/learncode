"use client";

import { ReactNode } from "react";

import extendTheme, { ColorSystemOptions } from "@mui/joy/styles/extendTheme";
import { CssVarsProvider } from "@mui/joy";

const muiCustomColors: ColorSystemOptions = {
  palette: {
    primary: {
      solidBg: "rgb(156, 87, 252)",
      solidBorder: "rgb(62, 56, 72)",
      solidHoverBg: "rgb(126, 37, 251)",
      solidHoverBorder: "rgb(62, 56, 72)",
      solidActiveBg: "rgb(60, 41, 86)",
      solidDisabledBg: "rgb(108, 102, 102)",
    }
  }
};

const muiTheme = extendTheme({
  cssVarPrefix: "muiT",
  colorSchemes: {
    dark: muiCustomColors,
    light: muiCustomColors
  }
});

export default function CustomMuiStyles({ children }: { children: ReactNode }) {
  return <CssVarsProvider theme={muiTheme}>{children}</CssVarsProvider>;
}
