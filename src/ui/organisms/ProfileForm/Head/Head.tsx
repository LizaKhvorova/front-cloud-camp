import React from "react";
import { Avatar, Link, Flex } from "ui/atoms";
import {StyledName, StyledFlex, StyledWrapper} from "./styled"

export const Head = () => {
    return (
        <Flex alignItems="center">
            <Avatar initial={"AИ"}/>
            <StyledFlex>
                <StyledName size="2xl" weight="semibold">Иван Иванов</StyledName>
                <StyledWrapper marginTop="8px">
                    <Link href="/">Telegram</Link>
                    <Link href="/">GitHub</Link>
                    <Link href="/">Resume</Link>
                </StyledWrapper>
            </StyledFlex>
        </Flex>  
    )
}
