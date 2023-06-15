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

    reverse?: boolean
}

export interface IStyledButtonProps extends IButtonProps {
    reverse?: boolean
}
