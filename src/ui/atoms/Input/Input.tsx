import React, { forwardRef, useEffect, useState } from "react";

import {
    InputWrapper,
    StyledInput,
    StyledLabel,
    TipMessage
} from "./styled";
import { IInputProps } from "./types";

import { Absolute, Box, Relative, Flex } from "../Basics";
import { Delete } from "../Icon";

export const Input = forwardRef<HTMLInputElement, IInputProps> (
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
            cancel,
            ...other
        },
        ref,
    ) => {
        console.log(value)
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

        const handleCancelInput = () => {
        }

        return (
            <InputWrapper {...other} marginBottom="24px">
                {label ? (
                    <Box>
                        <StyledLabel>{label}</StyledLabel>
                    </Box>
                ) : null}
                <Relative>
                    <Flex alignItems="center">
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
                        {cancel? <Delete /> : null}
                    </Flex>
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
