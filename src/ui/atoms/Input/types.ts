import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
type size = "small" | "medium" | "large";

export interface IInputProps {
    status?: "error";
    errorMessage?: string;
    size?: size;
    value?: string;
    placeholder?: string;
    type?: "password" | "text" | "email" | "tel";
    label?: string;
    tip?: string;
    cancel?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export interface IStyledInputProps
    extends DetailedHTMLProps<
            InputHTMLAttributes<HTMLInputElement>,
            HTMLInputElement
        >,
        Pick<IInputProps, "status" | "tip"> {
    variation?: size;
}
