import styled from "styled-components";
import {IBasicsProps} from "./types";

export const Box = styled.div<IBasicsProps>`
`;
export const Flex = styled(Box)`
    display: flex;
`;

export const Relative = styled(Box)`
    position: relative;
`;

export const Absolute = styled(Box)`
    position: absolute;
`;
