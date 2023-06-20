import { ReactNode } from "react";

import { TIndent, TFonts } from "./tokens";

export interface ITheme {
    indent: TIndent;
    fonts: TFonts;
}

export interface ICloudThemeProviderProps {
    theme: ITheme;
    children: ReactNode;
}