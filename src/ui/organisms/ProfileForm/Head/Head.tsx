import React from "react";
import { Avatar } from "ui/atoms/Avatar";
import { FullName } from "ui/atoms/FullName";
import { Link } from "ui/atoms/Link";
import { Flex } from "ui/atoms/Basics";

export const Head = () => {
    return (
        <Flex padding="25px" alignItems="center">
            <Avatar initial={"II"}/>
            <Flex flexDirection="column" marginLeft="25px">
                <FullName>Ivan Ivanov</FullName>
                <Flex marginTop="8px">
                    <Link href="/">Telegram</Link>
                    <Link href="/">GitHub</Link>
                    <Link href="/">Resume</Link>
                </Flex>
            </Flex>
        </Flex>  
    )
}
