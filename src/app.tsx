import React, { ReactElement, useState } from 'react';
import { theme } from "./ui/theme";
import { CloudThemeProvider } from "./ui/theme";
import { Input } from 'ui/atoms/Input';
import { Button } from 'ui/atoms/Button';
import { Textarea } from 'ui/atoms/Textarea';
import { Select } from 'ui/atoms/Select/Select';
import { genderOptions} from "./consts";


export const App = (): ReactElement => {
    return(
        <CloudThemeProvider theme={theme}>
            <div>hello</div>
            <Input placeholder='username/email' label='Nickname'/>
            <Button>Start</Button>
            <Textarea placeholder='placeholder' tip='Tip' label='About'/>
            <Select options={genderOptions}/>
        </CloudThemeProvider>
    )
}
