import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface IButtonProps
    extends Omit<
            DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
            "width" | "ref" | "color" | "backgroundColor"
        > 
        {

    onClick?: () => void;

    children?: React.ReactNode;

    inverted?: boolean;
    margin?: string;
}

export interface IStyledButtonProps extends IButtonProps {
    inverted?: boolean
}
