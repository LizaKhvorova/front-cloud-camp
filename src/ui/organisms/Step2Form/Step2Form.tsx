import React from "react";
import { useNavigate } from "react-router";
import { 
    Flex, 
    Stepper, 
    Input, 
    Typography, 
    Button, 
    Checkbox, 
    Radio} from "ui/atoms";
    
import { Cross } from "ui/atoms/Icon";


export const Step2Form = () => {
    const navigate = useNavigate();
    return(
        <Flex flexDirection="column">
            <Stepper width="680px" current={2}/> 
            <Flex flexDirection="column" mt="50px" mb="10px">
                <Typography mb="10px">Advantages</Typography>
                <Input cancel/>
                <Input cancel/>
                <Input cancel/>
            </Flex> 
            <Button inverted width="45px"><Cross/></Button>
            <Flex marginY="20px" flexDirection="column">
                <Typography mb="5px">Checkbox Group</Typography>
                <Checkbox label="Agreed To Recieve News" />
                <Checkbox label="Consented Data Processing"/>
            </Flex>
            <Flex flexDirection="column" alignItems="start">
                <Typography mb="5px">Radio Group</Typography>
                <Radio />
            </Flex>
            <Flex justifyContent="space-between" mt="60px">
                <Button inverted onClick={() => navigate(-1)}>Назад</Button>
                <Button onClick={() => navigate("/step3")}>Далее</Button>
            </Flex>
        </Flex>
    )
}