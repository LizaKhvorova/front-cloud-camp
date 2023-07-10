import styled, {css} from "styled-components";
import {IStyledProps} from "./types";
import { Flex, Box } from "../Basics";
import { adaptive } from "../../theme";

const selectStyles = css<IStyledProps>`
    box-sizing: border-box;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
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

export const StyledLabel = styled(Box)`
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
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

export const StyledTitle = styled(Flex)<IStyledProps>`
    ${selectStyles}
    justify-content: space-between;
    align-items: baseline;
    color: ${({color}) => color};
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 4px;

`;

export const StyledUl = styled.ul<IStyledProps>`
    list-style-type: none;
    padding-left: 0;
    margin: 0;

`;

export const StyledLi = styled.li<IStyledProps>`
    ${selectStyles}
    color: #333333;
    &:hover {
        background: rgba(0, 0, 0, 0.04);
        color: black;
    }

`;

export const StyledWrapper = styled(Box)<IStyledProps>`
    background: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08); 

    ${({variation}) => {
            switch (variation) {
                case "small":
                    return  `width: 200px`;
                case "medium":
                    return `width: 250px`;
                case "large":
                    return `width: 300px`;
                default:
                    return `width: 300px`;
            }
        }};
    ${adaptive.maxWidth.tablet} {
        ${({variation}) => {
            switch (variation) {
                case "small":
                    return  `width: 200px`;
                case "medium":
                    return `width: 250px`;
                case "large":
                    return `width: 300px`;
                default:
                    return `width: 300px`;
            }
        }};
    }
    ${adaptive.maxWidth.mobile} {
        ${({variation}) => {
            switch (variation) {
                case "small":
                    return  `width: 100px`;
                case "medium":
                    return `width: 150px`;
                case "large":
                    return `width: 200px`;
                default:
                    return `width: 200px`;
            }
        }};
    }
`