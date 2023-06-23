import React, { ReactElement } from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { createGlobalStyle } from 'styled-components'
import { Profile } from 'pages/Profile';
import {Step1} from "pages/Step1";
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
            <Step1 />
            </CloudThemeProvider>
        </>
     

    )
       
}

