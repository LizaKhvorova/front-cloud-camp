import React from "react";
import { Stepper } from "ui/atoms/Stepper/Stepper";
import { Flex } from "ui/atoms/Basics";
import { InputForm } from "./InputForm";

export const Step1Form = () => {

    return(
        <Flex flexDirection="column" >
            <Stepper width="680px"/>
            <InputForm />
        </Flex>    
    )
}