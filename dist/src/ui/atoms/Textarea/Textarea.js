import React, { useEffect, useState } from "react";
import { StyledLabel, TipMessage, StyledTextarea, TextareaWrapper, } from "./styled";
import { Absolute, Box, Relative } from "../Basics";
export const Textarea = ({ label, placeholder = "", size = "large", onChange, onBlur, onFocus, value, errorMessage, tip, status, maxLength, }) => {
    const [textareaValue, setTextareaValue] = useState(value || "");
    useEffect(() => {
        if (value !== undefined && value !== textareaValue) {
            setTextareaValue(value);
        }
    }, [value]);
    const handleChangeTextarea = (e) => {
        const value = e.target.value;
        setTextareaValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(value);
    };
    return (React.createElement(TextareaWrapper, null,
        label ? (React.createElement(Box, null,
            React.createElement(StyledLabel, null, label))) : null,
        React.createElement(Relative, null,
            React.createElement(StyledTextarea, { placeholder: placeholder, variation: size, onChange: handleChangeTextarea, onBlur: onBlur, onFocus: onFocus, value: textareaValue, maxLength: maxLength }),
            React.createElement(Absolute, null, status ? (React.createElement(TipMessage, null, errorMessage)) : tip ? (React.createElement(TipMessage, null, tip)) : null))));
};
