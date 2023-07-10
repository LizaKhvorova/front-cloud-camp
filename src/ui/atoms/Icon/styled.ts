import styled from "styled-components";
import { Flex } from "../Basics";
import { adaptive } from "ui/theme";

export const StyledFlex = styled(Flex)`
    cursor: pointer;
    margin-left: 16px;
`

export const StyledWrapper = styled(Flex)`
    width: 16px;
    height: 16px;
    align-items: center;

    ${adaptive.maxWidth.tablet} {
        width: 10px;
        height: 10px;
    }

    ${adaptive.maxWidth.mobile} {
        width: 10px;
        height: 10px;
    }
`

export const StyledSuccessWrapper = styled(Flex)`
    width: 80px;
    height: 80px;
    align-items: center;

    ${adaptive.maxWidth.tablet} {
        width: 65px;
        height: 65px;
    }

    ${adaptive.maxWidth.mobile} {
        width: 55px;
        height: 55px;
    }
`