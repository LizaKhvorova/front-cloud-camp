import styled from "styled-components";
import {IStyledButtonProps} from "./types";
import { space } from "styled-system";

export const StyledButton = styled.button<IStyledButtonProps>`
    display: flex;
    ${space}
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
`;


