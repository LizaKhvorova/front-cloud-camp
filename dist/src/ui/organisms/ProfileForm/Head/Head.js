import React from "react";
import { Avatar } from "ui/atoms/Avatar";
import { FullName } from "ui/atoms/FullName";
import { Link } from "ui/atoms/Link";
import { Flex } from "ui/atoms/Basics";
export const Head = () => {
    return (React.createElement(Flex, { padding: "25px", margin: "25px" },
        React.createElement(Avatar, { initial: "II" }),
        React.createElement(Flex, null,
            React.createElement(FullName, null, "Ivan Ivanov"),
            React.createElement(Flex, null,
                React.createElement(Link, { href: "/" }, "Telegram"),
                React.createElement(Link, { href: "/" }, "GitHub"),
                React.createElement(Link, { href: "/" }, "Resume")))));
};
