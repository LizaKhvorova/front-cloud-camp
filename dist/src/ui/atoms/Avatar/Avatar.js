import React from "react";
import { AvatarWrapper, AvatarImage } from "./styled";
export const Avatar = ({ url, initial = "BB" }) => {
    return (React.createElement(AvatarWrapper, null, url ?
        React.createElement(AvatarImage, { src: url })
        :
            initial));
};
