import styled from "styled-components";
import { adaptive } from "ui/theme";
import { Typography } from "../Typography";
export const StyledCheckbox = styled.input.attrs({
    type: "checkbox",
})`
    border-radius: 4px;
    border: 1.5px solid var(rgba(0, 0, 0, 0.12)); 
    width: 16px;
    height: 16px;

    ${adaptive.maxWidth.tablet} {
        width: 14px;
        height: 14px;
    }

    ${adaptive.maxWidth.mobile} {
        width: 12px;
        height: 12px;
    }
`;

export const StyledLabel = styled(Typography)`
    font-size: 16px;
    color: #333333;
    margin-left: 8px;

    ${adaptive.maxWidth.tablet} {
        font-size: 14px;
        margin-left: 6px;
    }

    ${adaptive.maxWidth.mobile} {
        font-size: 12px;
        margin-left: 4px;
    }
`