import styled from "styled-components";


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
        background: #FFFFFF;
        color: #5558FA;
        border: 1.5px solid #5558FA;
    }
`;

export const StyledButtonReverse = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: SB Sans Interface;
    border-radius: 4px;
    background: #FFFFFF;
    border: 1.5px solid #5558FA;
    color: #5558FA;
    width: 79px;
    height: 44px;

    &:hover {
        background: #5558FA;
        color: #FFFFFF;
    }
`;


