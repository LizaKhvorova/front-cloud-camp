var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { forwardRef, useEffect, useState } from "react";
import { InputWrapper, StyledInput, StyledLabel, TipMessage, } from "./styled";
import { Absolute, Box, Relative } from "../Basics";
export const Input = forwardRef((_a, ref) => {
    var { label, type = "text", placeholder = "", size = "lagre", onChange, onBlur, onFocus, value, errorMessage, tip, status } = _a, other = __rest(_a, ["label", "type", "placeholder", "size", "onChange", "onBlur", "onFocus", "value", "errorMessage", "tip", "status"]);
    const [inputValue, setInputValue] = useState(value || "");
    useEffect(() => {
        if (value !== undefined && value !== inputValue) {
            setInputValue(value);
        }
    }, [value]);
    const handleChangeInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e);
    };
    return (React.createElement(InputWrapper, Object.assign({}, other),
        label ? (React.createElement(Box, null,
            React.createElement(StyledLabel, null, label))) : null,
        React.createElement(Relative, null,
            React.createElement(StyledInput, Object.assign({ type: type, placeholder: placeholder, variation: size, onChange: handleChangeInput, onBlur: onBlur, onFocus: onFocus, value: inputValue, ref: ref }, other)),
            React.createElement(Absolute, null, status ? (React.createElement(TipMessage, null, errorMessage)) : tip ? (React.createElement(TipMessage, null, tip)) : null))));
});
