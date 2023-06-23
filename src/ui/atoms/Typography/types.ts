import { DetailedHTMLProps, StyleHTMLAttributes } from "react";

import { SpaceProps } from "styled-system";

export interface ITypographyProps
    extends SpaceProps,
        DetailedHTMLProps<
            StyleHTMLAttributes<HTMLSpanElement>,
            HTMLSpanElement
        > {
    size?:
        | "xs"
        | "base"
        | "l"
        | "xl"
        | "2xl";
    weight?: "semibold" | "regular";
}
