import React, { FC } from "react";

import { ThemeProvider } from "styled-components";

import { ICloudThemeProviderProps } from "./types";

export const CloudThemeProvider: FC<ICloudThemeProviderProps> = (props) => {
    return (
        <ThemeProvider theme={props.theme}>
            {props.children}
        </ThemeProvider>
    );
};