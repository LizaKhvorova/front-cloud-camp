import styled, {css} from "styled-components";
import InputMask from 'react-input-mask';

import { IStyledInputProps } from "./types";

import { adaptive } from "../../theme";
import { Box } from "../Basics";
import { Delete } from "../Icon";

const inputStyles = css`
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
`

export const StyledInput = styled.input<IStyledInputProps>`
    ${inputStyles};
    padding: ${({ theme }) => theme.indent.l}
        ${({ theme, variation }) => {
            switch (variation) {
                case "small":
                    return theme.indent.s;
                case "medium":
                    return theme.indent.m;
                case "large":
                    return theme.indent.l;
                default:
                    return theme.indent.l;
            }
        }};
    height: ${({variation}) => {
        switch (variation) {
            case "small":
                return "28px";
            case "medium":
                return "36px";
            case "large":
                return "44px";
            default:
                return "44px";
        }
    }};
    width: ${({variation}) => {
        switch (variation) {
            case "small":
                return "200px";
            case "medium":
                return "250px";
            case "large":
                return "300px";
            default:
                return "300px";
        }
    }};
`;

export const StyledMaskedInput = styled(InputMask)<IStyledInputProps>`
    ${inputStyles};
    padding: ${({ theme }) => theme.indent.l}
        ${({ theme, variation }) => {
            switch (variation) {
                case "small":
                    return theme.indent.s;
                case "medium":
                    return theme.indent.m;
                case "large":
                    return theme.indent.l;
                default:
                    return theme.indent.l;
            }
        }};
    height: ${({variation}) => {
        switch (variation) {
            case "small":
                return "28px";
            case "medium":
                return "36px";
            case "large":
                return "44px";
            default:
                return "44px";
        }
    }};
    width: ${({variation}) => {
        switch (variation) {
            case "small":
                return "200px";
            case "medium":
                return "250px";
            case "large":
                return "300px";
            default:
                return "300px";
        }
    }};

`

export const TipMessage = styled(Box)`
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.48);
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
`;
