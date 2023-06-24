import React from "react";
import { Head } from "./Head";
import { Flex } from "ui/atoms/Basics";
import { Input } from "ui/atoms/Input";
import { PhoneInput } from "ui/atoms/Input/PhoneInput";
import { Button } from "ui/atoms/Button";
export const ProfileForm = () => {
    return(
        <>
            <Head />
            <Flex border={"1px solid rgba(0, 0, 0, 0.08)"} width="100%" maxWidth="852px" justifyContent="center" margin="24px 0"></Flex>
            <PhoneInput label="Номер телефона"/>
            <Input type="email" label="Email" placeholder="tim.jennings@example.com"/>
            <Button margin="24px 0" width="70px">Начать</Button>
        </>

    )

}