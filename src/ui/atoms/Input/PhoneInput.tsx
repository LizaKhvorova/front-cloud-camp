import React, {FC, useState} from 'react';
import {Box} from "../Basics";
import {StyledLabel, StyledMaskedInput} from "./styled";
import {IPhoneInputProps} from "./types";

export const PhoneInput: FC<IPhoneInputProps> = 
    (
        {   
            label, 
            value, 
            onChange
        }
    ) => {
    const [inputValue, setInputValue] = useState<typeof value>(value || "");
    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setInputValue(value);
        onChange?.(e);
    };
    return (
        <Box mb="24px">
        {label ? (
                    <Box>
                        <StyledLabel>{label}</StyledLabel>
                    </Box>
                ) : null}
        <StyledMaskedInput 
            mask='(+7) 999 999-99-99' 
            onChange={handleChangeInput} 
            value={inputValue}  
            alwaysShowMask
        />
        </Box>
        
      );
}