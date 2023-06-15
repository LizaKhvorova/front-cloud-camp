import styled from "styled-components";

import { IButtonProps } from "./types";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SB Sans Interface;
    border-radius: 4px;
    border: none;
    background: #5558FA;
    color: #FFFFFF;
    width: 79px;
    height: 44px;

    &:hover {
        border-color: #FFFFFF;
    }

    &:active {
        border-color: #FFFFFF;
    }
`;
