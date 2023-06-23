import styled from "styled-components";
import {
    alignContent,
    alignItems,
    alignSelf,
    border,
    color,
    flex,
    flexBasis,
    flexDirection,
    flexGrow,
    flexShrink,
    flexWrap,
    justifyContent,
    justifyItems,
    justifySelf,
    layout,
    order,
    shadow,
    space,
    position
} from "styled-system";

import { IBoxProps, IFlexProps } from "./types";

export const Box = styled.div<IBoxProps>`
    ${color};
    ${border};
    ${layout};
    ${space};
    ${shadow};
    ${position}
`;
export const Flex = styled(Box)<IFlexProps>`
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

export const Relative = styled(Box)`
    position: relative;
`;

export const Absolute = styled(Box)`
    position: absolute;
`;

// export const Form = styled.form<IFormProps>`
//     ${color};
//     ${border};
//     ${layout};
//     ${space};
// `;

