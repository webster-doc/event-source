import React from "react";
import { Container } from "@grid";
import { Text } from "@typography";

import { Wrapper } from "./styles";

export const Footer = ({ appName, copyrightDate }) => {
    const copyrightYear = copyrightDate.getFullYear();

    return (
        <Wrapper>
            <Container>
                <Text>
                    © {copyrightYear} &nbsp;
                    {appName}
                </Text>
            </Container>
        </Wrapper>
    );
};