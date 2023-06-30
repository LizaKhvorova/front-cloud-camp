import React from "react";
import { useNavigate } from "react-router";
import { 
    Flex, 
    Stepper, 
    Input, 
    Typography, 
    Button, 
    Checkbox, 
    Radio,
    Cross,
    Box
} from "ui/atoms";


export const Step2Form = () => {
    const navigate = useNavigate();
    const Advantages = [1,2,3];
    const checkboxGroup = [{label: "Agreed To Recieve News", id: 1}, {label: "Consented Data Processing", id: 2}]
    
    return(
        <Flex flexDirection="column">
            <Stepper width="680px" current={2}/> 
            <Flex flexDirection="column" mt="50px" mb="10px">
                <Typography mb="10px">Advantages</Typography>
                {Advantages.map((item, e) => <Box key={item}><Input cancel/></Box>)}
            </Flex> 
            <Button inverted width="45px"><Cross/></Button>
            <Flex marginY="20px" flexDirection="column">
                <Typography mb="5px">Checkbox Group</Typography>
                {checkboxGroup.map((item) => (
                    <Checkbox label={item.label} key={item.id}/>
                    ))}
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