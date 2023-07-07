import styled from "styled-components";
import { space } from "styled-system";
import { adaptive } from "ui/theme";
import { IStyledButtonProps } from "./types";

export const StyledButton = styled.button<IStyledButtonProps>`
    ${space}
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    border-radius: 4px;
    ${({inverted}) => inverted? 
        `background: #FFFFFF;
        border: 1.5px solid #5558FA;
        color: #5558FA;` 
    : 
        `border: none;
        background: #5558FA;
        color: #FFFFFF;`
    }
    width: ${({width}) => width};
    height: 44px;
    padding: 12px;

    &:hover {
        ${({inverted}) => inverted? 
        `background: #5558FA;
        color: #FFFFFF;` 
    : 
        `background: #FFFFFF;
        color: #5558FA;
        border: 1.5px solid #5558FA;`
        }   
    }

    ${adaptive.maxWidth.tablet} {
        font-size: 12px;
        padding: 8px;
        height: 40px;

    }

    ${adaptive.maxWidth.mobile} {
        font-size: 10px;
        padding: 6px;
        height: 36px;
    }
`;