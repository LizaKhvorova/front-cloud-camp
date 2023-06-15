import styled from "styled-components";
import { Flex } from "../Basics";

export const Card = styled(Flex)`
    max-width: 900px;
    flex-direction: column;
    width: ${({width}) => width};
    background-color: #FFFFFF;
    border-radius: 24px;
    margin: 0 auto;
    margin-top: 25px;
    min-height: 312px;
`