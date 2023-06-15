import React, { useState } from "react";
import {StyledUl, StyledLi, StyledWrapper, StyledTitle, StyledLabel } from "./styled";
import {ISelectProps} from "./types";
import {ArrowDown} from "../Icon";
import { Box } from "../Basics";

export const Select = ({label = "Sex", size = "large", options}: ISelectProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [option, setOption] = useState("Не выбрано");

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
            {option === "Не выбрано" ? 
                <StyledTitle color="rgba(0, 0, 0, 0.48)">{option}
                <Box onClick={handleOpen}>
                    <ArrowDown/>
                </Box>
                </StyledTitle> 
            : 
                <StyledTitle color="#333333">{option}
                <Box onClick={handleOpen}>
                    <ArrowDown/>
                </Box>
                </StyledTitle>
            }
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