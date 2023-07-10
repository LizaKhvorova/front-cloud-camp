import styled from "styled-components";
import { adaptive } from "ui/theme";
import { Flex, Typography } from "../../atoms";

export const StyledTypography = styled(Typography)`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;

    ${adaptive.maxWidth.mobile} {
        font-size: 12px;
    }
`;

export const StyledFlex = styled(Flex)`
    flex-direction: column;
    min-width: 200px;
`