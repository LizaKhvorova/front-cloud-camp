
import {
    BackgroundColorProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PaddingProps,
    ShadowProps,
    SpaceProps,
} from "styled-system";

export interface IBoxProps
    extends LayoutProps,
        PaddingProps,
        BackgroundColorProps,
        BorderProps,
        SpaceProps,
        ShadowProps {
    gap?: string;
    backgroundColor?: string;
}

export interface IFlexProps extends IBoxProps, FlexboxProps {}