import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";

type size = "small" | "medium" | "large";

export interface ITextareaProps {
    status?: "error";
    errorMessage?: string;
    size: size;
    value?: string;
    placeholder?: string;
    label?: string;
    tip?: string;
    maxLength?: number;
    onChange?: (value: string) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export interface IStyledTextareaProps
    extends DetailedHTMLProps<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            HTMLTextAreaElement
        >,
        Pick<ITextareaProps, "status" | "tip"> {
    variation: size;
}
