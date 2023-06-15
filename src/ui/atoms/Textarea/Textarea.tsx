import React, { FC, useEffect, useState } from "react";

import {
    StyledLabel,
    TipMessage,
    StyledTextarea,
    TextareaWrapper,
} from "./styled";
import { ITextareaProps } from "./types";

import { Absolute, Box, Relative } from "../Basics";

export const Textarea: FC<ITextareaProps> = ({
    label,
    placeholder = "",
    size = "large",
    onChange,
    onBlur,
    onFocus,
    value,
    errorMessage,
    tip,
    status,
    maxLength,
}) => {
    const [textareaValue, setTextareaValue] = useState<typeof value>(
        value || "",
    );

    useEffect(() => {
        if (value !== undefined && value !== textareaValue) {
            setTextareaValue(value);
        }
    }, [value]);

    const handleChangeTextarea = (
        e: React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
        const value = e.target.value;

        setTextareaValue(value);
        onChange?.(value);
    };

    return (
        <TextareaWrapper>
            {label ? (
                <Box>
                    <StyledLabel>{label}</StyledLabel>
                </Box>
            ) : null}
            <Relative>
                <StyledTextarea
                    placeholder={placeholder}
                    variation={size}
                    onChange={handleChangeTextarea}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    value={textareaValue}
                    maxLength={maxLength}
                />
                <Absolute>
                    {status ? (
                        <TipMessage
                        >
                            {errorMessage}
                        </TipMessage>
                    ) : tip ? (
                        <TipMessage
                        >
                            {tip}
                        </TipMessage>
                    ) : null}
                </Absolute>
            </Relative>
        </TextareaWrapper>
    );
};
