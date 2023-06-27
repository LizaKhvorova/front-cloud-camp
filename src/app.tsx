import React, { ReactElement } from 'react';
import { createGlobalStyle } from 'styled-components'
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import {Routes} from "./Routes";
import FontStyles from "./ui/theme/FontStyles";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F4F5;
  }
`

export const App = (): ReactElement => {
    return(
        <>
            <GlobalStyle />
            <FontStyles />
            <CloudThemeProvider theme={theme}>
            <Routes />
            </CloudThemeProvider>
        </>
    )
       
}

