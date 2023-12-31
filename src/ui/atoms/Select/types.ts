import React from "react";
type size = "small" | "medium" | "large";

export interface ISelectProps{
    size?: size;
    label?: string;
    color?: string; 
    options: any[];
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
}

export interface IStyledProps {
    variation?: size;
    value?: string;
}