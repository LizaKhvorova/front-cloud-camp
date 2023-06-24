import React, {useState} from "react";
import { Flex } from "../Basics";
import {StyledCheckbox} from "./styled";
import { Typography } from "../Typography";
import { ICheckboxProps } from "./types";

export const Checkbox = ({label}: ICheckboxProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <Flex mb="5px">
            <StyledCheckbox onClick={handleChecked} checked={isChecked}/>
            <Typography color="#333333" marginLeft="8px">{label}</Typography>
        </Flex>    
    )
}