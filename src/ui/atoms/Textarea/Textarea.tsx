import React, { FC, useEffect, useState, forwardRef } from "react";

import {
    StyledLabel,
    TipMessage,
    StyledTextarea,
    TextareaWrapper,
} from "./styled";
import { ITextareaProps } from "./types";

import { Absolute, Box, Flex, Relative } from "../Basics";
import { Typography } from "../Typography";

export const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps> (
    (
        {
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
            maxLength
        }, ref, 
    ) => {
        const [textareaValue, setTextareaValue] = useState<typeof value>(
            value || "",
        );
        const [charCount, setCharCount] = useState(0);

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
            setCharCount(value.length);
            onChange?.(e);
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
                            ref={ref}
                        />
                        <Flex justifyContent="flex-end" alignItems="self-end">
                                <Typography size="xs" paddingRight="20px">
                                    {`${charCount}/${maxLength}`}
                                </Typography>
                        </Flex>
                    <Absolute>
                        {status ? (
                            <TipMessage color="red"
                            >
                                {errorMessage}
                            </TipMessage>
                        ) : tip ? (
                            <TipMessage color="rgba(0, 0, 0, 0.48)"
                            >
                                {tip}
                            </TipMessage>
                        ) : null}
                    </Absolute>
                </Relative>
            </TextareaWrapper>
        );
    },
);
