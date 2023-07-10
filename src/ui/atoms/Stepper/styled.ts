import styled from "styled-components";
import { Absolute, Box, Flex } from "../Basics";
import { Typography } from "../Typography";
import {IStepperProps} from "./types";

export const StyledWrapper = styled(Box)<{ width: string }>`
    min-width: 200px;
    width: ${({width}) => width};
    max-width: 680px;
    margin: 0 auto;
    z-index: 0;
`

export const BackLine = styled(Flex)`
    overflow: hidden;
    content: "";
    height: 7px;
    background-color: rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    align-items: center;
`;

export const ProgressLine = styled(Absolute)<IStepperProps>`
    content: "";
    height: 7px;
    ${({current}) => {
     switch(current) {
        case 1:
            return `width: 0`;
        case 2: 
            return `
            width: 50%`;
        case 3: 
            return `width: 100%`
        default: 
            return `width: 0`
        }
    }};
    background: #5558FA;
    border-radius: 8px;
    transition: all 1s ease-out;
`;

export const ActiveStep = styled(Typography)`
    color: #5558FA
`;

export const PassiveStep = styled(Typography)`
    color: #666666
`;

export const DotWrapper = styled(Flex)`
    align-items: center;
    justify-content: space-between;
    width: ${({width}) => width};
    max-width: 680px;
`;