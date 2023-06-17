import styled from "styled-components";
export const StyledButton = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SB Sans Interface;
    border-radius: 4px;
    ${({ inverted }) => inverted ?
    `background: #FFFFFF;
        border: 1.5px solid #5558FA;
        color: #5558FA;`
    :
        `border: none;
        background: #5558FA;
        color: #FFFFFF;`}

    width: 79px;
    height: 44px;

    &:hover {
        ${({ inverted }) => inverted ?
    `background: #5558FA;
        color: #FFFFFF;`
    :
        `background: #FFFFFF;
        color: #5558FA;
        border: 1.5px solid #5558FA;`}   
    }
`;
