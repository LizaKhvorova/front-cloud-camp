import React, {useState} from "react";
import { Flex } from "../Basics";
import { StyledRadio, StyledLabel } from "./styled";
import { IRadioProps } from "./types";

export const Radio = ({ 
    values = [{value: "1", label: "1"}, {value: "2", label: "2"}, {value: "3", label: "3"}]}: IRadioProps) => {
    const [value, setValue] = useState("1");

    const handleChangeValue = (e: any) => {
        setValue(e.target.value)
    }

    return(
        <Flex flexDirection="column">
            {values.map((item) => (
                <Flex key={item.value}>
                    <StyledRadio  value={item.value} checked={value === item.value ? true : false} onChange={handleChangeValue}/>
                    <StyledLabel>{item.label}</StyledLabel>
                </Flex>
            ))}
        </Flex>
    )
}