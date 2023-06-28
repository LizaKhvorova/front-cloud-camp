import React from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

import { Head } from "./Head";
import { Flex, Input, PhoneInput, Button, Form, Box } from "ui/atoms";

export const ProfileForm = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }} = useForm({mode: "onBlur"});
    const onSubmit = (data: any) => console.log(data);

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Head />
            <Flex border={"1px solid rgba(0, 0, 0, 0.08)"} width="100%" maxWidth="852px" justifyContent="center" margin="24px 0"></Flex>
            <PhoneInput label="Номер телефона"/>
            <Input 
                type="email" 
                label="Email" 
                placeholder="tim.jennings@example.com" 
                status={errors["email"] && "error"}
                errorMessage={
                    ((errors["email"] || {}).message as string) ||"" }
                {...register("email", {pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                }})}
            />
            <Button margin="24px 0" width="70px" onClick={() => navigate("/step1")}>Начать</Button>
        </Form>
    )

}