import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import {getStyledComponentPropsForDisable} from "@story-book-utilities"
import { H1, H1Props } from './index'
import { primaryTheme } from "@app-theme";

export default {
    title: 'UI-kit/Typography/Title',
    component: H1,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
        color: {
            control: 'radio',
            options: [...Object.keys(primaryTheme.palette.fonts)]
        }
    },

} as Meta

const Template: Story<H1Props> = args => (
    <H1 {...args} >
        H1 Title
    </H1>
)

export const h1 = Template.bind({})
h1.args = {size: 'primary', color: 'primary', weight: 'regular', textAlign: 'left' };

