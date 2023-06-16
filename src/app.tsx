import React, { ReactElement } from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { Input } from 'ui/atoms/Input';
import { Button } from 'ui/atoms/Button';
import { Textarea } from 'ui/atoms/Textarea';
import { Select } from 'ui/atoms/Select/Select';
import { genderOptions} from "./consts";
import { Card } from "./ui/atoms/Card";
import { Link } from 'ui/atoms/Link';

import { createGlobalStyle } from 'styled-components'
import { FullName } from 'ui/atoms/FullName';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F4F4F5;
  }
`

export const App = (): ReactElement => {
    return(
        <>
           <GlobalStyle />
           <Card>
           <CloudThemeProvider theme={theme}>
            <div>hello</div>
            <Input placeholder='username/email' label='Nickname'/>
            <Button>Start</Button>
            <Textarea placeholder='placeholder' tip='Tip' label='About'/>
            <Select options={genderOptions} />
            <Link href='/'>Telegram</Link>
            </CloudThemeProvider>
            <FullName>Иван Иванов</FullName>
           </Card>
            
        </>
     

    )
       
}
