import styled from "styled-components";
import { space } from "styled-system";

import { ITypographyProps } from "./types";

export const Typography = styled.span<ITypographyProps>`
    ${space};
    font-family: ${({theme}) => theme.fonts.SBSansInterface};
    ${({ size }) => {
        switch (size) {
            case "xs":
                return `
                    font-size: 12px;
                    font-height: 16px;
            `;
            case "base":
                return `
                    font-size: 14px;
                    font-height: 20px;
            `;
            case "l":
                return `
                    font-size: 16px;
                    font-height: 24px;
            `;
            case "xl":
                return `
                    font-size: 18px;
                    font-height: 26px;
            `;
            case "2xl":
                return `
                    font-size: 20px;
                    font-height: 28px;
            `;
            default:
                `
                font-size: 14px;
                font-height: 20px;
            `;
        }
    }};
    ${({ weight }) => {
        switch (weight) {
            case "semibold":
                return `
                    font-weight: 600;
            `;
            case "regular":
                return `
                    font-weight: 400;
            `;
            default:
                `
                font-weight: 400;
            `;
        }
    }};
    ${({ color }) => `color: ${color || "#070707"}`};
`;
