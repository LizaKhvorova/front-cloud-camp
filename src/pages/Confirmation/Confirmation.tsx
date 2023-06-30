import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Typography, Flex, Button } from "ui/atoms";
import { ModalLayout } from "ui/templates/ModalLayout";
import { Success, Error, CloseModal } from "ui/atoms";
import {IConfirmationProps} from "./types";

export const Confirmation = ({setIsOpen}: IConfirmationProps) => {
    const [success, setSuccess] = useState(true);
    const navigate = useNavigate();
    
    return (
        //TODO вынести логику в организмы
        <ModalLayout>
            {success? 
            <Flex flexDirection="column" alignItems="center">
                <Typography mb="24px" weight="semibold">Форма успешно отправлена</Typography>  
                <Flex mb="24px">
                <Success />
                </Flex>
                <Button onClick={() => navigate("/")}>На главную</Button>
            </Flex>
                :
            <>
                <Flex justifyContent="space-between">
                    <Typography mb="24px" weight="semibold">Ошибка</Typography>  
                    <CloseModal onClick={setIsOpen}/>
                </Flex>
                <Flex justifyContent="center">
                    <Error />
                </Flex>
                <Flex justifyContent="flex-end" mt="24px">
                    <Button onClick={setIsOpen}>Закрыть</Button>
                </Flex>
            </> 
        }
        </ModalLayout>    
    )
}