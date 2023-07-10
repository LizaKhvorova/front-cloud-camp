import styled from "styled-components";

import { IStyledTextareaProps } from "./types";

import { adaptive } from "../../theme";
import { Box, Flex } from "../Basics";

export const StyledTextarea = styled.textarea<IStyledTextareaProps>`
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-weight: 400;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.48);
    max-width: 680px;
    width: 100%;
    ${({variation}) => {
        switch (variation) {
            case "small":
                return  `height: 64px`;
            case "medium":
                return `height: 74px`;
            case "large":
                return `height: 84px`;
            default:
                return `height: 84px`;
        }
    }};

    &:hover {
        background: rgba(0, 0, 0, 0.04);
        color: black;
    }

    &:focus {
        background: rgba(0, 0, 0, 0.04);
        color: black;
    }

    ::placeholder {
        font-family: SB Sans Interface;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.48);
    }

    ${({ theme, variation }) => {
        switch (variation) {
            case "small":
                return `padding: ${theme.indent.l} ${theme.indent.s}`
            case "medium":
                return `padding: ${theme.indent.l} ${theme.indent.m}`
            case "large":
                return `padding: ${theme.indent.l} ${theme.indent.l}`
            default:
                return `padding: ${theme.indent.l} ${theme.indent.l}`
            }
    }};

    ${adaptive.maxWidth.tablet} {
        font-size: 12px;
    }

    ${adaptive.maxWidth.mobile} {
        min-width: 200px;
        font-size: 10px;
    }
`;

export const TipMessage = styled(Box)`
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${({color}) => color};
    margin-top: 8px;
    margin-left: 2px;

    ${adaptive.maxWidth.tablet} {
        font-size: 10px;
        margin-top: 6px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 10px;
        margin-top: 4px;
    }
`;

export const StyledLabel = styled(Box)`
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #333333;
    margin-bottom: 8px;
    margin-left: 2px;

    ${adaptive.maxWidth.tablet} {
        font-size: 12px;
        margin-bottom: 6px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 10px;
        margin-bottom: 4px;
    }
`;

export const TextareaWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;