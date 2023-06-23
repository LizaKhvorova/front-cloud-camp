import React, { ReactElement } from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { createGlobalStyle } from 'styled-components'
import { Profile } from 'pages/Profile/Profile';
import FontStyles from "./ui/theme/FontStyles";
import { ProgressBar } from 'ui/atoms/Stepper';
import { Flex } from 'ui/atoms/Basics';
import { Card } from 'ui/templates/Card';

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
            <Profile />
            <Card>
            <Flex marginTop="20px">
            <ProgressBar width='680px'/>
            </Flex> 
            </Card>
           
            </CloudThemeProvider>
        </>
     

    )
       
}

