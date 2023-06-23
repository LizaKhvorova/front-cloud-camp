import React, { forwardRef, useEffect, useState } from "react";

import {
    InputWrapper,
    StyledInput,
    StyledLabel,
    TipMessage,
} from "./styled";
import { IInputProps } from "./types";

import { Absolute, Box, Relative } from "../Basics";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
    (
        {
            label,
            type = "text",
            placeholder = "placeholder",
            size = "lagre",
            onChange,
            onBlur,
            onFocus,
            value,
            errorMessage,
            tip,
            status,
            ...other
        },
        ref,
    ) => {
        const [inputValue, setInputValue] = useState<typeof value>(value || "");

        useEffect(() => {
            if (value !== undefined && value !== inputValue) {
                setInputValue(value);
            }
        }, [value]);

        const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;

            setInputValue(value);
            onChange?.(e);
        };

        return (
            <InputWrapper {...other} marginBottom="24px">
                {label ? (
                    <Box>
                        <StyledLabel>{label}</StyledLabel>
                    </Box>
                ) : null}
                <Relative>
                    <StyledInput
                        type={type}
                        placeholder={placeholder}
                        variation={size}
                        onChange={handleChangeInput}
                        onBlur={onBlur}
                        onFocus={onFocus}
                        value={inputValue}
                        ref={ref}
                        {...other}
                    />
                    <Absolute>
                        {status ? (
                            <TipMessage>
                                {errorMessage}
                            </TipMessage>
                        ) : tip ? (
                            <TipMessage>
                                {tip}
                            </TipMessage>
                        ) : null}
                    </Absolute>
                </Relative>
            </InputWrapper>
        );
    },
);
