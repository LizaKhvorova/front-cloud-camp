import React from "react";
import { Avatar } from "ui/atoms/Avatar";
import { Link } from "ui/atoms/Link";
import { Flex } from "ui/atoms/Basics";
import { Typography } from "ui/atoms/Typography";

export const Head = () => {
    return (
        <Flex alignItems="center">
            <Avatar initial={"AИ"}/>
            <Flex flexDirection="column" marginLeft="25px">
                <Typography size="2xl" weight="semibold">Иван Иванов</Typography>
                <Flex marginTop="8px">
                    <Link href="/">Telegram</Link>
                    <Link href="/">GitHub</Link>
                    <Link href="/">Resume</Link>
                </Flex>
            </Flex>
        </Flex>  
    )
}
