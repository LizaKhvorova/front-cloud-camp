import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useForm, Resolver } from "react-hook-form";

import { 
    Stepper, 
    Textarea, 
    Button, 
    Flex, 
    Box 
} from "ui/atoms";
import { Confirmation } from "pages";

export const Step3Form = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm({mode: "onChange"});
    const onSubmit = (data: any) => console.log(data);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    // TOFIX Не работает ErrorMessage при длине больше 200
    
    return (
        <Flex flexDirection="column" onSubmit={handleSubmit(onSubmit)}>
            <Stepper width="680px" current={3}/>
            <Box mt="60px">
                <Textarea   
                    label="About" 
                    placeholder="placeholder"
                    maxLength={200}
                    {...register('about', {
                        maxLength: 
                            {value: 200, 
                            message: "The maximum length is 200 characters"}})}
                    status={errors["about"] && "error"}
                    errorMessage={((errors["about"] || {}).message as string) ||"" }  
                />
            </Box>
            <Flex justifyContent="space-between" mt="60px" maxWidth="680px">
                <Button inverted onClick={() => navigate(-1)}>Назад</Button>
                
                <Button onClick={handleOpenModal}>Отправить</Button>
            </Flex>
            {isOpen? <Confirmation setIsOpen={() => setIsOpen(false)}/> : null}
        </Flex>
    )
}