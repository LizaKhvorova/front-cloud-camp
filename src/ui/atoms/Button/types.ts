import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import {SpaceProps, LayoutProps} from "styled-system";
export interface IButtonProps
    extends Omit<
            DetailedHTMLProps<
                ButtonHTMLAttributes<HTMLButtonElement>,
                HTMLButtonElement
            >,
            "width" | "ref" | "color" | "backgroundColor"
        >, SpaceProps
        {

    onClick?: () => void;

    children?: React.ReactNode;

    inverted?: boolean;

    width?: string;
}

export interface IStyledButtonProps extends IButtonProps {
    inverted?: boolean
}
