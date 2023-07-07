import styled from "styled-components";
import { Box, Flex } from "../Basics";
import { adaptive } from "ui/theme";
import { LinkProps } from "./types";

export const StyledLink = styled.a`
    text-decoration: none;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    cursor: pointer;
    color: #5558FA;
    margin-left: 4px;
    &:active {
        color: black
    }
`

export const StyledWrapper = styled(Flex)<{ size: LinkProps["size"] }>`
    display: flex;
    align-items: center;
    font-size: ${({ size }) => {
        switch (size) {
            case "small":
                return "10px";
            case "medium":
                return "12px";
            case "large":
                return "16px";
            default:
                return "12px";
        }
    }};

    ${adaptive.maxWidth.tablet} {
        font-size: 10px;
        padding-top: 5px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 8px;
    }
    margin-right: 16px;
`