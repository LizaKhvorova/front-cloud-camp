import React, { ReactElement } from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { Input } from 'ui/atoms/Input';
import { Button } from 'ui/atoms/Button';


export const App = (): ReactElement => {
    return(
        <CloudThemeProvider theme={theme}>
            <div>hello</div>
            <Input placeholder='username/email' label='Nickname'/>
            <Button>Start</Button>
        </CloudThemeProvider>
    )
}
