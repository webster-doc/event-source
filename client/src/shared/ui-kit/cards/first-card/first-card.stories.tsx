import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {FirstCard} from "./first-card"
import {FirstCardProps} from "./types";
import {H2} from "@typography"

export default {
    title: "UI-kit/Cards/FirstCard",
    component: FirstCard,
} as Meta;

const Template: Story<FirstCardProps> = ({...args}) => {

    return <div>
        <FirstCard {...args} >
            <H2>First card</H2>
        </FirstCard>
    </div>
};

export const Primary = Template.bind({});
Primary.args = {};
