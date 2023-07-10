import styled from "styled-components";
import { space } from "styled-system";
import { adaptive } from "ui/theme";
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

    ${adaptive.maxWidth.tablet} {
        ${({ size }) => {
            switch (size) {
                case "xs":
                    return `
                        font-size: 10px;
                        font-height: 14px;
                `;
                case "base":
                    return `
                        font-size: 12px;
                        font-height: 18px;
                `;
                case "l":
                    return `
                        font-size: 14px;
                        font-height: 22px;
                `;
                case "xl":
                    return `
                        font-size: 16px;
                        font-height: 24px;
                `;
                case "2xl":
                    return `
                        font-size: 18px;
                        font-height: 26px;
                `;
                default:
                    `
                    font-size: 12px;
                    font-height: 18px;
                `;
            }
        }};
    }
    ${adaptive.maxWidth.mobile} {
        ${({ size }) => {
            switch (size) {
                case "xs":
                    return `
                        font-size: 8px;
                        font-height: 12px;
                `;
                case "base":
                    return `
                        font-size: 10px;
                        font-height: 16px;
                `;
                case "l":
                    return `
                        font-size: 12px;
                        font-height: 20px;
                `;
                case "xl":
                    return `
                        font-size: 14px;
                        font-height: 22px;
                `;
                case "2xl":
                    return `
                        font-size: 16px;
                        font-height: 24px;
                `;
                default:
                    `
                    font-size: 10px;
                    font-height: 16px;
                `;
            }
        }};
    }
`;
