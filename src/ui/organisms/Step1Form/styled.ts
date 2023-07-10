import styled from "styled-components";
import { Flex } from "ui/atoms";
import { adaptive } from "ui/theme";

export const StyledFLex = styled(Flex)`
    flex-direction: column;
    justify-content: space-evenly;
    margin: 20px 0;
    height: 520px;

    ${adaptive.maxWidth.tablet} {
        height: 420px;
    }

    ${adaptive.maxWidth.mobile} {
        height: 320px;
    }

`