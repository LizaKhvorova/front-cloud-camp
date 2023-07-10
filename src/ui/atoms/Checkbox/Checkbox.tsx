import React, {useState} from "react";
import { Flex } from "../Basics";
import {StyledCheckbox, StyledLabel} from "./styled";
import { ICheckboxProps } from "./types";

export const Checkbox = ({label}: ICheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <Flex mb="5px">
            <StyledCheckbox onClick={handleChecked} checked={isChecked}/>
            <StyledLabel>{label}</StyledLabel>
        </Flex>    
    )
}