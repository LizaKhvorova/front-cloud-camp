import React from "react";
import { useNavigate } from "react-router";
import { Stepper } from "ui/atoms/Stepper/Stepper";
import { Input } from "ui/atoms/Input";
import { Select } from "ui/atoms/Select";
import { Button } from "ui/atoms/Button";
import { Flex } from "ui/atoms/Basics";
import { genderOptions } from "../../../consts/genderOptions";


export const Step1Form = () => {
    const navigate = useNavigate();

    return(
        <Flex flexDirection="column">
            <Stepper width="680px"/>
            <Flex flexDirection="column" height="520px" marginY="20px" justifyContent="space-evenly">
                <Input label="Nickname" />
                <Input label="Name"/>
                <Input label="Surname"/>
                <Select options={genderOptions}/>
            </Flex>
            <Flex justifyContent="space-between">
                <Button inverted onClick={() => navigate(-1)}>Назад</Button>
                <Button onClick={() => navigate("/step2")}>Далее</Button>
            </Flex>
        </Flex>    
    )
}