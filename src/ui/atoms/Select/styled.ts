import styled from "styled-components";
import {IStyledUlProps} from "./types";
import { Box } from "../Basics";
import { adaptive } from "../../theme";

export const StyledLabel = styled(Box)`
    font-family: 'SB Sans Interface';
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

    margin-top: 30px;

`;

export const StyledTitle = styled(Box)<IStyledUlProps>`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    box-sizing: border-box;
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
    font-family: 'SB Sans Interface';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: ${({color}) => color};
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    border-radius: 4px;
`;

export const StyledUl = styled.ul<IStyledUlProps>`
    list-style-type: none;
    padding-left: 0;
    margin: 0;

`;

export const StyledLi = styled.li<IStyledUlProps>`
    box-sizing: border-box;
    font-family: 'SB Sans Interface';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #333333;
    padding: 12px;
    width: 100%;
    max-width: 300px;

    &:hover {
        background: rgba(0, 0, 0, 0.04);
        color: black;
    }

`;

export const StyledWrapper = styled(Box)`
    width: 100%;
    max-width: 300px;
    background: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);

`

