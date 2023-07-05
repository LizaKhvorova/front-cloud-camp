import React, {useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router";
import { Input, Select, Button, Flex, Box} from "ui/atoms";
import { useAppDispatch, useAppSelector, addProfileData, addSex } from "store";
import { genderOptions } from "../../../consts/genderOptions";

export const InputForm = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register, 
        control, 
        formState: { errors }, 
        getValues, 
        setValue
    } = useForm<{nickname: string, name: string, surname: string, sex: "man" | "woman" | "Не выбрано"}>({mode: "onBlur"});

    const data = useAppSelector(state => ({
        nickname: state.data.data?.nickname,
        name: state.data.data?.name,
        surname: state.data.data?.surname,
        sex: state.data.sex
    }));

    useEffect(() => {
        setValue("nickname", data.nickname as string);
        setValue("name", data.name as string);
        setValue("surname", data.surname as string);
        setValue("sex", data.sex as "man" | "woman" | "Не выбрано");
    }, [])
  // TODO Select
   const handleMove = () => {
        const values = getValues();
        console.log(values.sex);
        dispatch(addProfileData({ nickname: values.nickname , name: values.name, surname: values.surname}))
        dispatch(addSex(values.sex))
        navigate("/step2")
    }
    return (
        <Box>
            <Flex flexDirection="column" height="520px" marginY="20px" justifyContent="space-evenly">
                <Input 
                    label="Nickname" 
                    value={data.nickname}
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
                    value={data.name}
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
                    value={data.surname}
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
                {/* <Select 
                    options={genderOptions} 
                    value={data.sex} 
                /> */}
              
                <Controller
                control={control}
                name="sex"
                defaultValue={data.sex}
                render={({ field: {onChange, value}}) => (
                    <Select
                        options={genderOptions} 
                        onChange={onChange}
                        value={value}
                    />
                  )}
            />
            </Flex>
            <Flex justifyContent="space-between">
                <Button inverted onClick={() => navigate("/profile")}>Назад</Button>
                <Button onClick={handleMove}>Далее</Button>
            </Flex>
        </Box>    
    )
}