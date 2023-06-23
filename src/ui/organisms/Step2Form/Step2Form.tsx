import React from "react";
import { Stepper } from "ui/atoms/Stepper/Stepper";
import { Input } from "ui/atoms/Input";
import { Typography } from "ui/atoms/Typography";
import { Button } from "ui/atoms/Button";
import { Flex, Box } from "ui/atoms/Basics";
import { Cross } from "ui/atoms/Icon";

export const Step2Form = () => {
    return(
        <Flex flexDirection="column">
            <Stepper width="680px" current={2}/> 
            <Flex flexDirection="column" mt="50px" mb="10px">
                <Box mb="10px">
                    <Typography>Advantages</Typography>
                </Box>
            <Input />
            <Input />
            <Input />
            </Flex> 
                <Button inverted width="45px"><Cross/></Button>
            <Flex justifyContent="space-between" mt="60px">
                <Button inverted={true}>Назад</Button>
                <Button>Далее</Button>
            </Flex>
        </Flex>
    )
}