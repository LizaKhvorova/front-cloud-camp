import React, { useState } from "react";
import { Typography, Flex, Button } from "ui/atoms";
import { ModalLayout } from "ui/templates/ModalLayout";
import { Success, Error, CloseModal } from "ui/atoms";

export const Confirmation = () => {
    const [success, setSuccess] = useState(true);
    return (
        <ModalLayout>
            {success? 
            <Flex flexDirection="column" alignItems="center">
                <Typography mb="24px" weight="semibold">Форма успешно отправлена</Typography>  
                <Flex mb="24px">
                <Success />
                </Flex>
                <Button>На главную</Button>
            </Flex>
                :
            <>
                <Flex justifyContent="space-between">
                    <Typography mb="24px" weight="semibold">Ошибка</Typography>  
                    <CloseModal />
                </Flex>
                <Flex justifyContent="center">
                    <Error />
                </Flex>
                <Flex justifyContent="flex-end" mt="24px">
                    <Button>Закрыть</Button>
                </Flex>
            </> 
        }
        </ModalLayout>    
    )
}