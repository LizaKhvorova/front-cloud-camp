import React, {FC} from "react";
import { StyledLink, StyledWrapper } from "./styled";
import { LinkProps } from "./types";
import { Folder } from "../Icon";

export const Link: FC<LinkProps> = ({children, href, onClick, size = "medium"}) => {
    return (
        <StyledWrapper size={size} > 
            <Folder />
            <StyledLink
                href={href}
                onClick={onClick}
            >
                {children}
            </StyledLink>
        </StyledWrapper>
    )
};