import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {useForm} from "react-hook-form"
import { useAppDispatch, useAppSelector, addAdvantage, deleteAdvantage, addValueToAdvantange } from "store";
import {StyledTypography, StyledFlex} from "./styled";
import { 
    Flex, 
    Stepper, 
    Input, 
    Button, 
    Checkbox, 
    Radio,
    Cross,
    Box
} from "ui/atoms";


export const Step2Form = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const checkboxGroup = [{label: "Agreed To Recieve News", id: 1}, {label: "Consented Data Processing", id: 2}];
    const {
        register, 
        control, 
        formState: { errors }, 
        getValues, 
        setValue
    } = useForm({mode: "onBlur"});
    const data = useAppSelector(state => ({
        advantages: state.data.advantages,
        checkboxGroup: state.data.data?.checkboxGroup
    }));

    useEffect(() => {
        for(let i = 0; i <= data.advantages.length - 1; i++) {
            // setValue(`${i}`, {id: i, value: data.advantages[i].value} )
            setValue(`${i}`, data.advantages[i].value )
        }
    }, [])

    const handleAddAdvantage = () => {
        dispatch(addAdvantage(data.advantages))
    }
    const handleDeleteAdvantage = (id: number) => {
        dispatch(deleteAdvantage(id))
    }

    const handleMove = () => {
        const values = getValues();
        console.log(values);
        // dispatch(addValueToAdvantange())
        navigate("/step3")
    }
    return(
        <StyledFlex>
            <Stepper current={2}/> 
            <Flex flexDirection="column" mt="50px" mb="10px">
                <StyledTypography>Advantages</StyledTypography>
                {data.advantages.map(
                    (item) => 
                    <Box key={item.id}>
                        <Input 
                            cancel 
                            handleCancel={() => handleDeleteAdvantage(item.id)} 
                            {...register(`${item.id}`)} 
                            value={item.value}/>
                    </Box>)}
            </Flex> 
            <Button inverted width="45px" onClick={handleAddAdvantage}>
                <Cross/>
            </Button>
            <Flex marginY="20px" flexDirection="column">
                <StyledTypography>Checkbox Group</StyledTypography>
                {checkboxGroup.map((item) => (
                    <Checkbox label={item.label} key={item.id} {...register(`checkboxGroup-${item.id}`)}/>
                    ))}
            </Flex>
            <Flex flexDirection="column" alignItems="start">
                <StyledTypography>Radio Group</StyledTypography>
                <Radio />
            </Flex>
            <Flex justifyContent="space-between" mt="60px" minWidth="200px">
                <Button inverted onClick={() => navigate("/step1")}>Назад</Button>
                <Button onClick={handleMove}>Далее</Button>
            </Flex>
        </StyledFlex>
    )
}