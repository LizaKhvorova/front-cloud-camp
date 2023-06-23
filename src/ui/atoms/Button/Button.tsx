import React from "react";

import { StyledButton} from "./styled";
import { IButtonProps } from "./types";

export const Button = ({
    children,
    inverted, 
    width
}: IButtonProps) => {
    return (

     <StyledButton type="button" inverted={inverted} width={width}>
            {children}
        </StyledButton>
        
    );
};
