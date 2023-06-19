import React from 'react';
import InputMask from 'react-input-mask';
import { Input } from './Input';

export const PhoneInput = (props: any) => {

    return (
        <InputMask 
          mask='(+7) 999 999 9999' 
          maskPlaceholder="(+7) 999 999 9999"
          alwaysShowMask={true}
          value={props.value} 
          onChange={props.onChange}
          maskChar={"9"}>
            {(inputProps: any) => <Input {...inputProps}/>}
        </InputMask>
      );
}