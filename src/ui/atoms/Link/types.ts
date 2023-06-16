import { DetailedHTMLProps, LinkHTMLAttributes } from "react";

export interface LinkProps
    extends DetailedHTMLProps<
        LinkHTMLAttributes<HTMLLinkElement>,
        HTMLLinkElement
    > {
    size?: "small" | "medium" | "large";
    onClick?: VoidFunction;
}

export interface InternalProps extends LinkProps, BaseProps {
    href?: never;
}

export interface BaseProps {
    size?: "small" | "medium" | "large";
}