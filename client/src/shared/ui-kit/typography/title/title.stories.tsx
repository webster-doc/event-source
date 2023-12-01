import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import {getStyledComponentPropsForDisable} from "@story-book-utilities"
import { Title, TitleProps } from './index'
import {primaryTheme} from "@app-theme";

export default {
    title: 'UI-kit/Typography/Title',
    component: Title,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
        color: {
            control: 'radio',
            options: [...Object.keys(primaryTheme.palette.fonts)]
        }
    },

} as Meta

const Template: Story<TitleProps> = args => (
    <Title {...args} >
        Title
    </Title>
)

export const Primary = Template.bind({})
Primary.args = { size: 'md', color: 'primary', weight: 'regular', textAlign: 'left' };

