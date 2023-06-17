import React from "react";
import { StyledLink, StyledWrapper } from "./styled";
import { Folder } from "../Icon";
export const Link = ({ children, href, onClick, size = "medium" }) => {
    return (React.createElement(StyledWrapper, { size: size },
        React.createElement(Folder, null),
        React.createElement(StyledLink, { href: href, onClick: onClick }, children)));
};
