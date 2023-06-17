import React from "react";
import { StyledFullName } from "./styled";
export const FullName = ({ children }) => {
    return (React.createElement(StyledFullName, null, children));
};
