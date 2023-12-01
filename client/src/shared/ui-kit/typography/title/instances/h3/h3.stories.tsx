import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import {getStyledComponentPropsForDisable} from "@story-book-utilities"
import { H3, H3Props } from './index'
import { primaryTheme } from "@app-theme";

export default {
    title: 'UI-kit/Typography/Title',
    component: H3,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
        color: {
            control: 'radio',
            options: [...Object.keys(primaryTheme.palette.fonts)]
        }
    },

} as Meta

const Template: Story<H3Props> = args => (
    <H3 {...args} >
        H3 Title
    </H3>
)

export const h3 = Template.bind({})
h3.args = {size: 'primary', color: 'primary', weight: 'regular', textAlign: 'left' };

