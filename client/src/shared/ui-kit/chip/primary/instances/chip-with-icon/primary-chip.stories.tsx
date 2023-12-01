import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import { PrimaryChipWithIcon } from "./primary-chip"
import { PrimaryChipWithIconProps } from "./types";

export default {
    title: "UI-kit/Chip/Primary/Instances",
    component: PrimaryChipWithIcon,
    argTypes: {
        hasDelete: {
            control: 'boolean'
        },
    }
} as Meta;

const Template: Story<PrimaryChipWithIconProps> = ({...args}) => {

    return <div>
        <PrimaryChipWithIcon {...args} />
    </div>
};

export const primaryChipWithIcon = Template.bind({});
primaryChipWithIcon.args = {label: 'Label'};
