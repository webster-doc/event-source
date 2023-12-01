import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import {getStyledComponentPropsForDisable} from "@story-book-utilities"
import { H2, H2Props } from './index'
import { primaryTheme } from "@app-theme";

export default {
    title: 'UI-kit/Typography/Title',
    component: H2,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
        color: {
            control: 'radio',
            options: [...Object.keys(primaryTheme.palette.fonts)]
        }
    },

} as Meta

const Template: Story<H2Props> = args => (
    <H2 {...args} >
        H2 Title
    </H2>
)

export const h2 = Template.bind({})
h2.args = {size: 'primary', color: 'primary', weight: 'regular', textAlign: 'left' };

