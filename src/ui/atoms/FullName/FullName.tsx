import React from "react";
import {StyledFullName} from "./styled";
import {IFullNameProps} from "./types";

export const FullName = ({children}: IFullNameProps) => {
    return(
        <StyledFullName>
            {children}
        </StyledFullName>
    )
}