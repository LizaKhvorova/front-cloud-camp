import styled from "styled-components";

import { IStyledInputProps } from "./types";

import { adaptive } from "../../theme";
import { Box } from "../Basics";

export const StyledInput = styled.input<IStyledInputProps>`
    box-sizing: border-box;
    font-family: SB Sans Interface;
    font-weight: 400;
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
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0.16);
    height: ${(props) => {
        switch (props.variation) {
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
    width: ${(props) => {
        switch (props.variation) {
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

    color: rgba(0, 0, 0, 0.48);

    &:hover {
        background-color: rgba(0, 0, 0, 0.16);
        color: black;
    }

    &:focus {
        background-color: rgba(0, 0, 0, 0.16);
        color: black;
    }

    ::placeholder {
        font-family: SB Sans Interface;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.48);
    }
`;

export const TipMessage = styled(Box)`
    font-family: 'SB Sans Interface';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.48);

    ${adaptive.maxWidth.tablet} {
        font-size: 10px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 10px;
    }
`;

export const StyledLabel = styled(Box)`
    font-family: 'SB Sans Interface';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #333333;
    margin-bottom: 8px;

    ${adaptive.maxWidth.tablet} {
        font-size: 12px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 10px;
    }
`;

export const InputWrapper = styled(Box)`
    display: flex;
    flex-direction: column;
`;
