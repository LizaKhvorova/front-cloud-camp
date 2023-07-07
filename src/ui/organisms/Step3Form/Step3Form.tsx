import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector, addProfileData } from "store";

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
    const dispatch = useAppDispatch();
    const {
        control, 
        formState: { errors }, 
        getValues,
        setValue} = useForm<{about: string}>({mode: "onChange"});

    const handleOpenModal = () => {
        setIsOpen(true);
    }

    const data = useAppSelector(state => ({
        about: state.data.data?.about
    }))

    useEffect(() => {
        setValue("about", data.about as string)
    }, [])

    const handleSubmitData = () => {
        const values = getValues();
        console.log(values);
        dispatch(addProfileData({about: values.about}))
        handleOpenModal()
    }

    // TOFIX Не работает ErrorMessage при длине больше 200
    
    return (
        <Flex flexDirection="column">
            <Stepper width="680px" current={3}/>
            <Box mt="60px">
                <Controller
                control={control}
                rules={{ maxLength: 
                    {value: 200, 
                    message: "The maximum length is 200 characters"}}}
                name="about"
                defaultValue={data.about}
                render={({ field: { onChange, value } }) => (
                    <Textarea
                        label="About"
                        onChange={onChange}
                        value={value}
                        status={errors["about"] && "error"}
                        errorMessage={((errors["about"] || {}).message as string) ||"" } 
                        maxLength={200} 
                        placeholder="placeholder"
                    />
                  )}
            />
            </Box>
            <Flex justifyContent="space-between" mt="60px" maxWidth="680px">
                <Button inverted onClick={() => navigate("/step1")}>Назад</Button>
                
                <Button onClick={handleSubmitData}>Отправить</Button>
            </Flex>
            {isOpen? <Confirmation setIsOpen={() => setIsOpen(false)}/> : null}
        </Flex>
    )
}