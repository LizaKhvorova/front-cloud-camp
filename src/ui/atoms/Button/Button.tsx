import React from "react";

import { StyledButton} from "./styled";
import { IButtonProps } from "./types";

export const Button = ({
    children,
}: IButtonProps) => {
    return (
        <StyledButton type="button">
            {children}
        </StyledButton>
    );
};
