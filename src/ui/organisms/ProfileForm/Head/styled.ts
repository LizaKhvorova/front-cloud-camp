import styled from "styled-components";
import { Typography, Flex } from "../../../atoms";
import { adaptive } from "../../../theme";

export const StyledName = styled(Typography)`
    font-size:  20px;
    
    ${adaptive.maxWidth.tablet} {
        font-size: 18px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 16px;
    }
`

export const StyledFlex = styled(Flex)`
    flex-direction: column;
    margin-left: 25px;

    ${adaptive.maxWidth.tablet} {
        margin-left: 5px;
    }

    ${adaptive.maxWidth.mobile} {
        margin-left: 5px;
    }
`

export const StyledWrapper = styled(Flex)`
    margin-top: 8px;
    ${adaptive.maxWidth.tablet} {
        margin-top: 5px;
    }

    ${adaptive.maxWidth.mobile} {
        margin-top: 2px;
    }
`