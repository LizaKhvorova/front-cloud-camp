import React from "react";
import { Card } from "../Card";
import {IStepsWrapper} from "./types";

export const StepsWrapper = ({children}: IStepsWrapper) => {
    return (
        <Card padding="60px 100px 80px 100px">
            {children}
        </Card>    
    )
}