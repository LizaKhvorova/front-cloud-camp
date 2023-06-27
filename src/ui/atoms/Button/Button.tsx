import React from "react";

import { StyledButton} from "./styled";
import { IButtonProps } from "./types";

export const Button = ({
    children,
    inverted, 
    onClick,
    width
}: IButtonProps) => {
    return (

     <StyledButton type="button" inverted={inverted} width={width} onClick={onClick}>
            {children}
        </StyledButton>
        
    );
};
