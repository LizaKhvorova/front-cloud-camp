import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Stepper, Textarea, Button, Flex, Box } from "ui/atoms";
import { Confirmation } from "pages";

export const Step3Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    return (
        <Flex flexDirection="column">
            <Stepper width="680px" current={3}/>
            <Box mt="60px">
                <Textarea label="About" tip="Tip" placeholder="placeholder"/>
            </Box>
            <Flex justifyContent="space-between" mt="60px" maxWidth="680px">
                <Button inverted onClick={() => navigate(-1)}>Назад</Button>
                //TODO модалка поверх 
                <Button onClick={handleOpenModal}>Отправить</Button>
            </Flex>
            {isOpen? <Confirmation setIsOpen={() => setIsOpen(false)}/> : null}
        </Flex>
    )
}