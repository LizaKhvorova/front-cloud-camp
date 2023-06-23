
import {
    BackgroundColorProps,
    BorderProps,
    FlexboxProps,
    LayoutProps,
    PaddingProps,
    ShadowProps,
    SpaceProps,
    PositionProps
} from "styled-system";

export interface IBoxProps
    extends LayoutProps,
        PaddingProps,
        BackgroundColorProps,
        BorderProps,
        SpaceProps,
        ShadowProps,
        PositionProps {
    gap?: string;
    backgroundColor?: string;
}

export interface IFlexProps extends IBoxProps, FlexboxProps {}