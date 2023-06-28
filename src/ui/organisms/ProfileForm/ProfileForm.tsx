import React from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";

import { Head } from "./Head";
import { Flex, Input, PhoneInput, Button, Form, Box } from "ui/atoms";

export const ProfileForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors, isValid }} = useForm({mode: "onBlur"});
    const onSubmit = (data: any) => console.log(data);
    console.log(errors);
    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Head />
            <Flex border={"1px solid rgba(0, 0, 0, 0.08)"} width="100%" maxWidth="852px" justifyContent="center" margin="24px 0"></Flex>
            <PhoneInput 
            label="Номер телефона"
            // status={errors && "error"}
            // errorMessage={((errors || {}).message) ||""}
            {...register("phoneNamber", {required: "Please enter your phone"})}
            />
            <Input type="email" label="Email" placeholder="tim.jennings@example.com"/>
            <Button margin="24px 0" width="70px" onClick={() => navigate("/step1")}>Начать</Button>
        </Form>

    )

}