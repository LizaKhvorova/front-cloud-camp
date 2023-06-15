import React from "react";

import { StyledButton, StyledButtonReverse} from "./styled";
import { IButtonProps } from "./types";

export const Button = ({
    children,
    reverse
}: IButtonProps) => {
    return (
        reverse? 
           ( <StyledButtonReverse type="button">
            {children}
        </StyledButtonReverse>)
        :
        (    <StyledButton type="button">
            {children}
        </StyledButton>)
        
    );
};
