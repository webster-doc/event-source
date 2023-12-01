import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import {getStyledComponentPropsForDisable} from "@story-book-utilities"
import { Text, TextProps } from '@typography'
import {primaryTheme} from "@app-theme";

export default {
    title: 'UI-kit/Typography/Text',
    component: Text,
    argTypes: {
        ...getStyledComponentPropsForDisable(),
        color: {
            control: 'radio',
            options: [...Object.keys(primaryTheme.palette.fonts)]
        }
    },

} as Meta

const Template: Story<TextProps> = args => (
    <Text {...args} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam eaque eligendi facere ipsum nesciunt,
        perferendis sint vero. Deserunt officia perspiciatis porro? Cum earum fugit harum hic laudantium, non sit?
    </Text>
)

export const Primary = Template.bind({})
Primary.args = { size: 'md', color: 'primary', weight: 'regular', textAlign: 'left' };

