import { ReactNode } from "react";

import { TIndent } from "./tokens";

export interface ITheme {
    indent: TIndent;
}

export interface ICloudThemeProviderProps {
    theme: ITheme;
    children: ReactNode;
}