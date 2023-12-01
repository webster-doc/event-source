import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Container, Box } from "@grid";

import { Wrapper, Logo } from "./styles";


import LogoIconPath from "@icons/logo.svg";
import UserIconPath from "@icons/user.svg";

export const Header: FC = () => {
    return (
        <Wrapper>
            <Container>
                <Box justifyContent="space-between" alignItems="center">
                    <Link to={"/"}>
                        <Logo src={LogoIconPath} alt="logo" />
                    </Link>

                    <Box alignItems="center" >
                        <img src={UserIconPath} alt="user" />
                    </Box>
                </Box>
            </Container>
        </Wrapper>
    );
}
