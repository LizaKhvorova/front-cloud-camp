import React from "react";
type size = "small" | "medium" | "large";

export interface ISelectProps{
    size?: size;
    label?: string;
    color?: string; 
    options: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

export interface IStyledUlProps extends ISelectProps{
    variation?: size;
}