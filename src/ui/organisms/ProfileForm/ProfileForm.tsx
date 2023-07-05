import React, {useEffect} from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector, addProfileData } from "store";

import { Head } from "./Head";
import { Flex, Input, PhoneInput, Button, Form } from "ui/atoms";

export const ProfileForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register, 
        control, 
        formState: { errors }, 
        getValues, 
        setValue
    } = useForm<{ email: string, phoneNumber: string}>({mode: "onBlur"});

    const data = useAppSelector(state => ({
        phoneNumber: state.data.data?.phoneNumber,
        email: state.data.data?.email
    }));
    
    useEffect(() => {
        setValue("email", data.email as string);
        setValue("phoneNumber", data.phoneNumber as string);
    }, [])

    const handleStart = () => {
        const values = getValues();
        dispatch(addProfileData({ phoneNumber: values.phoneNumber , email: values.email}))
        navigate("/step1")
    }
    return(
        <Form>
            <Head />
            <Flex border={"1px solid rgba(0, 0, 0, 0.08)"} width="100%" maxWidth="852px" justifyContent="center" margin="24px 0"></Flex>
            <Controller
                control={control}
                name="phoneNumber"
                defaultValue={data.phoneNumber}
                render={({ field: { onChange, value } }) => (
                    <PhoneInput
                    label="Номер телефона"
                      onChange={onChange}
                      value={value}
                    />
                  )}
            />
            <Input 
                type="email" 
                label="Email" 
                value={data?.email}
                placeholder="tim.jennings@example.com" 
                status={errors["email"] && "error"}
                errorMessage={
                    ((errors["email"] || {}).message as string) ||"" }
                {...register("email", {pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format"
                }})}
            />
            <Button margin="24px 0" width="70px" onClick={handleStart}>Начать</Button>
        </Form>
    )
}