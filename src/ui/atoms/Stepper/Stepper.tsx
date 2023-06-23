import React from "react";
import {IStepperProps} from "./types";
import {StyledWrapper, BackLine, ProgressLine, ActiveStep,PassiveStep, DotWrapper} from "./styled";
import { Absolute, Flex, Relative } from "../Basics";
import { DotActive, DotDone, DotPassive } from "../Icon";

export const Stepper = ({
    current = 1,
    width = "100%", 
    steps = [1,2,3],
}: IStepperProps) => {
    return(
        <StyledWrapper width={width}>
            <Relative height="16px">
                <BackLine>
                    <Absolute width="860px" zIndex="100">
                        <DotWrapper>
                        {steps.map((item) => (
                            item < current ? 
                            <DotDone /> : item > current ? <DotPassive  /> : item = current ? <DotActive /> :  null
                            ))}   
                        </DotWrapper> 
                    </Absolute>
                    <ProgressLine current={current}/>
                </BackLine>
            </Relative>
            <Flex justifyContent="space-between" marginTop="12px">
                {steps.map((item) => (
                        item <= current? 
                        <ActiveStep>{item}</ActiveStep> 
                        : 
                        <PassiveStep>{item}</PassiveStep>
                ))}
            </Flex>
        </StyledWrapper>
    )
}