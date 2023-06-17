import styled from "styled-components";
import { alignContent, alignItems, alignSelf, border, color, flex, flexBasis, flexDirection, flexGrow, flexShrink, flexWrap, justifyContent, justifyItems, justifySelf, layout, order, shadow, space, } from "styled-system";
export const Box = styled.div `
    ${color};
    ${border};
    ${layout};
    ${space};
    ${shadow}
`;
export const Flex = styled(Box) `
    display: flex;
    ${flexDirection};
    ${alignItems};
    ${alignContent};
    ${alignSelf};
    ${justifyContent};
    ${justifyItems};
    ${justifySelf};
    ${flex};
    ${flexBasis};
    ${flexGrow};
    ${flexShrink};
    ${flexWrap};
    ${order};
`;
export const Relative = styled(Box) `
    position: relative;
`;
export const Absolute = styled(Box) `
    position: absolute;
`;
