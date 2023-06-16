import React from "react";

import { StyledButton} from "./styled";
import { IButtonProps } from "./types";

export const Button = ({
    children,
    inverted
}: IButtonProps) => {
    return (

     <StyledButton type="button" inverted={inverted}>
            {children}
        </StyledButton>
        
    );
};
