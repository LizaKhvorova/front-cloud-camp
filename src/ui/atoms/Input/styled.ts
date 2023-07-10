import styled, {css} from "styled-components";
import InputMask from 'react-input-mask';

import { IStyledInputProps } from "./types";

import { adaptive } from "../../theme";
import { Box } from "../Basics";

const inputStyles = css<IStyledInputProps>`
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-weight: 400;
    font-size: 14px;
    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 4px;

    color: rgba(0, 0, 0, 0.48);
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
                return `padding: ${theme.indent.l} ${theme.indent.s}`;
            case "medium":
                return `padding: ${theme.indent.l} ${theme.indent.m}`;
            case "large":
                return `padding: ${theme.indent.l} ${theme.indent.l}`
            default:
                return `padding: ${theme.indent.l} ${theme.indent.l}`
            }
    }};

    ${({variation}) => {
        switch (variation) {
            case "small":
                return  `height: 28px;
                width: 200px`;
            case "medium":
                return `height: 36px;
                width: 250px`;
            case "large":
                return `height: 44px;
                width: 300px`;
            default:
                return `height: 44px;
                width: 300px`;
        }
    }};

    ${adaptive.maxWidth.tablet} {
        font-size: 12px;
        ${({ theme, variation }) => {
            switch (variation) {
                case "small":
                    return `padding: ${theme.indent.m} ${theme.indent.xs}`;
                case "medium":
                    return `padding: ${theme.indent.m} ${theme.indent.s}`;
                case "large":
                    return `padding: ${theme.indent.m} ${theme.indent.s}`
                default:
                    return `padding: ${theme.indent.m} ${theme.indent.s}`
            }
        }};
        ${({variation}) => {
            switch (variation) {
                case "small":
                    return  `height: 24px;
                    width: 200px`;
                case "medium":
                    return `height: 32px;
                    width: 250px`;
                case "large":
                    return `height: 40px;
                    width: 300px`;
                default:
                    return `height: 40px;
                    width: 300px`;
            }
        }};
    }

    ${adaptive.maxWidth.mobile} {
        min-width: 200px;
        font-size: 10px;
        ${({variation}) => {
            switch (variation) {
                case "small":
                    return  `height: 20px;
                    width: 100px`;
                case "medium":
                    return `height: 28px;
                    width: 150px`;
                case "large":
                    return `height: 36px;
                    width: 200px`;
                default:
                    return `height: 36px;
                    width: 200px`;
            }
        }};
    }
`
export const StyledInput = styled.input<IStyledInputProps>`
    ${inputStyles};
`;

export const StyledMaskedInput = styled(InputMask)<IStyledInputProps>`
    ${inputStyles}
`;

export const TipMessage = styled(Box)`
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: ${({color}) => color} ;
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

export const InputWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;

    ${adaptive.maxWidth.tablet} {
        margin-bottom: 16px;
    }

    ${adaptive.maxWidth.mobile} {
        margin-bottom: 8px;
    }
`;