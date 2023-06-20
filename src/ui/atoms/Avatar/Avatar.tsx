import React from "react";

import { AvatarWrapper, AvatarImage } from "./styled";
import { TAvatarProps } from "./types";

export const Avatar = ({ url, initial}: TAvatarProps) => {
    return (
        <AvatarWrapper>
            {url? 
            <AvatarImage src={url}/>
            :
            initial
        }
        </AvatarWrapper>
    )
};