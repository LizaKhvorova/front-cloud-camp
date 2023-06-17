import React, { useState } from "react";
import { StyledUl, StyledLi, StyledWrapper, StyledTitle, StyledLabel } from "./styled";
import { ArrowDown } from "../Icon";
import { Box } from "../Basics";
export const Select = ({ label = "Sex", size = "large", options, value = "Не выбрано" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(value);
    const handleSelect = (value) => {
        setIsOpen(false);
        setOption(value);
    };
    const handleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (React.createElement(Box, null,
        label ? React.createElement(StyledLabel, null, label) : null,
        React.createElement(StyledTitle, { color: option === "Не выбрано" ? "rgba(0, 0, 0, 0.48)" : "#333333" },
            option,
            React.createElement(Box, { onClick: handleOpen },
                React.createElement(ArrowDown, null))),
        isOpen ?
            React.createElement(StyledUl, { size: size },
                React.createElement(StyledWrapper, null, options.map((item) => (React.createElement(StyledLi, { value: item.value, key: item.value, onClick: () => handleSelect(item.title) }, item.title)))))
            : null));
};
