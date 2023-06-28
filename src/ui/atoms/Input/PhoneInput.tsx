import React from 'react';
import {Box} from "../Basics";
import {StyledLabel, StyledMaskedInput} from "./styled";

export const PhoneInput = (props: any) => {
    return (
        <Box mb="24px">
        {props.label ? (
                    <Box>
                        <StyledLabel>{props.label}</StyledLabel>
                    </Box>
                ) : null}
        <StyledMaskedInput 
            mask='(+7) 999 999-99-99' 
            onChange={props.onChange} 
            value={props.value}  
            alwaysShowMask
        />
        </Box>
        
      );
}