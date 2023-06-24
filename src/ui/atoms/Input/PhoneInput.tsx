import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from './Input';
import {Box} from "../Basics";
import {StyledLabel} from "./styled";

export const PhoneInput = (props: any) => {

    return (
        <>
        {props.label ? (
                    <Box>
                        <StyledLabel>{props.label}</StyledLabel>
                    </Box>
                ) : null}
        <InputMask 
          mask='(+7) 999 999 9999' 
          maskPlaceholder="(+7) 999 999 9999"
          alwaysShowMask={true}
          value={props.value} 
          onChange={props.onChange}
          maskChar={"9"}>
            {(inputProps: any) => <Input {...inputProps}/>}
        </InputMask>
        </>
        
      );
}