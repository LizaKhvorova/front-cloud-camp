import React from "react";
import { StyledModal, ModalCard } from "./styled";
import {IModalLayout} from "./types";
import { Card } from "../Card";

export const ModalLayout = ({children}: IModalLayout) => {
    return (
        <StyledModal>
            <ModalCard>
                {children}
            </ModalCard>
        </StyledModal>    
    )
}