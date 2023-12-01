import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'

import { Container, ContainerProps } from './index'
import {getStyledComponentPropsForDisable} from "@story-book-utilities";

export default {
    title: 'UI-kit/Grid',
    component: Container,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
    },
} as Meta

const Template: Story<ContainerProps> = args => (
    <Container {...args}>
        <h5>content</h5>
    </Container>
)

export const container = Template.bind({})
container.args = {debug: true}
