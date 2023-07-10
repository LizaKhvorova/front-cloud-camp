import styled from "styled-components";
import { adaptive } from "ui/theme";
import { Typography } from "../Typography";

export const StyledRadio = styled.input.attrs({
    type: "radio",
    name: "radio"
})`
    border: 1.5px solid var( rgba(0, 0, 0, 0.12)); 
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