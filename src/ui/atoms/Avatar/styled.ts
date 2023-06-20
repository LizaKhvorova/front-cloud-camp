import styled from "styled-components";

import { TAvatarProps } from "./types";

import { adaptive } from "../../theme";
import { Box } from "../Basics";

export const AvatarImage = styled.img.attrs<TAvatarProps>(({ src, initial }) => ({
    src,
    initial
}))`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #D5E4F7;

    display: flex;
    align-items: center;
    justify-content: center;
   

    ${adaptive.maxWidth.tablet} {
        max-width: 60px;
        max-height: 60px;
        margin-right: 24px;
    }

    ${adaptive.maxWidth.mobile} {
        max-width: 40px;
        max-height: 40px;
        margin-right: 8px;
    }
`;

export const AvatarWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #D5E4F7;
   

    ${adaptive.maxWidth.tablet} {
        max-width: 60px;
        max-height: 60px;
        margin-right: 24px;
    }

    ${adaptive.maxWidth.mobile} {
        max-width: 40px;
        max-height: 40px;
        margin-right: 8px;
    }
`