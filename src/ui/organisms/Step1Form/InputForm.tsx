import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Input } from "ui/atoms/Input";
import { Select } from "ui/atoms/Select";
import { Button } from "ui/atoms/Button";
import { Flex, Box } from "ui/atoms/Basics";
import { genderOptions } from "../../../consts/genderOptions";

export const InputForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});
    const onSubmit = (data: any) => console.log(data);
    const navigate = useNavigate();
    return (
        <Box onSubmit={handleSubmit(onSubmit)}>
            <Flex flexDirection="column" height="520px" marginY="20px" justifyContent="space-evenly">
                <Input 
                    label="Nickname" 
                    {...register('nickname', 
                        { 
                            maxLength: 
                                {value: 30, 
                                message: "The maximum length of a Nickname is 30 characters (use letters or numbers)" }, 
                            pattern: 
                                {value: /^[а-яА-ЯёЁa-zA-Z0-9]+$/, 
                                message: "Use only letters and numbers, special characters are not allowed" } })} 
                    status={errors["nickname"] && "error"}
                    errorMessage={
                        ((errors["nickname"] || {}).message as string)}
                />
                <Input 
                    label="Name"
                    {...register('name', 
                        { 
                            maxLength: 
                                {value: 50, 
                                message: "The maximum length of your name is 50 characters (use only letters)" }, 
                            pattern: 
                                {value: /^[а-яА-ЯёЁa-zA-Z0]+$/, 
                                message: "Use only letters, numbers and special characters are not allowed" } })} 
                    status={errors["name"] && "error"}
                    errorMessage={
                        ((errors["name"] || {}).message as string)}
                />
                <Input 
                    label="Surname"
                    {...register('surname', 
                        { 
                            maxLength: 
                                {value: 50, 
                                message: "The maximum length of your name is 50 characters (use only letters)" }, 
                            pattern: 
                                {value: /^[а-яА-ЯёЁa-zA-Z0]+$/, 
                                message: "Use only letters, numbers and special characters are not allowed" } })} 
                    status={errors["surname"] && "error"}
                    errorMessage={
                        ((errors["surname"] || {}).message as string)}
                />
                <Select options={genderOptions}/>
            </Flex>
            <Flex justifyContent="space-between">
                <Button inverted onClick={() => navigate(-1)}>Назад</Button>
                <Button onClick={() => navigate("/step2")}>Далее</Button>
            </Flex>
        </Box>    
    )
}