import styled from "styled-components";
import { Box } from "ui/atoms";
import { Card } from "../Card";

export const StyledModal = styled(Box)`
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background: rgba(0, 0, 0, 0.16);
    overflow: auto;
`

export const ModalCard = styled(Card)`
    width: 100%;
    max-width: 400px;
    min-width: 200px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -200px;
    margin-top: -150px; 
    /* margin: 0 auto; */
    padding: 32px;
`