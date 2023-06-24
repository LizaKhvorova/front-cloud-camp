import React from "react";
import { Stepper, Textarea, Button, Flex, Box } from "ui/atoms";

export const Step3Form = () => {
    return (
        <Flex flexDirection="column">
            <Stepper width="680px" current={3}/>
            <Box mt="60px">
                <Textarea label="About" tip="Tip" placeholder="placeholder"/>
            </Box>
            <Flex justifyContent="space-between" mt="60px" width="680px">
                <Button inverted={true}>Назад</Button>
                <Button>Отправить</Button>
            </Flex>
        </Flex>
    )
}