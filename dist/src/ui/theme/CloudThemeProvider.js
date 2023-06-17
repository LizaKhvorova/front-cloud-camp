import React from "react";
import { ThemeProvider } from "styled-components";
export const CloudThemeProvider = (props) => {
    return (React.createElement(ThemeProvider, { theme: props.theme }, props.children));
};
