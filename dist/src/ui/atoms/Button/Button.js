import React from "react";
import { StyledButton } from "./styled";
export const Button = ({ children, inverted }) => {
    return (React.createElement(StyledButton, { type: "button", inverted: inverted }, children));
};
