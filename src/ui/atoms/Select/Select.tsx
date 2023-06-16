import React, { useState } from "react";
import {StyledUl, StyledLi, StyledWrapper, StyledTitle, StyledLabel } from "./styled";
import {ISelectProps} from "./types";
import {ArrowDown} from "../Icon";
import { Box } from "../Basics";

export const Select = ({label = "Sex", size = "large", options, value = "Не выбрано"}: ISelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState(value);

    const handleSelect = (value: any) => {
        setIsOpen(false);
        setOption(value)
    }

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    
    return (
        <Box>
            {label? <StyledLabel>{label}</StyledLabel> : null}
            <StyledTitle color={option === "Не выбрано"? "rgba(0, 0, 0, 0.48)" : "#333333" }>
                {option}
                <Box onClick={handleOpen}>
                    <ArrowDown/>
                </Box>
            </StyledTitle> 
            {isOpen?
                <StyledUl size={size}>
                <StyledWrapper>
                    {options.map((item) => (
                        <StyledLi value={item.value} key={item.value} onClick={() => handleSelect(item.title)}>{item.title}</StyledLi>
                    ))}
                </StyledWrapper>          
                </StyledUl> 
            : null
            }     
        </Box>
             
    )
}