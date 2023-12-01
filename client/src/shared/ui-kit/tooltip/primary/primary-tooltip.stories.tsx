import React from "react";
import { ReactComponent as HintIcon} from '@icons/hint.svg'


import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryTooltip} from "./primary-tooltip"
import {PrimaryTooltipProps} from "./types";

export default {
    title: "UI-kit/Tooltip",
    component: PrimaryTooltip,
} as Meta;

const Template: Story<PrimaryTooltipProps> = ({...args}) => {

    return <div style={{padding: '40px'}} >
        <PrimaryTooltip {...args}  >
            <HintIcon width={35} />
        </PrimaryTooltip>
    </div>
};

export const Primary = Template.bind({});
Primary.args = {title: 'Hint title', isNowrap: true};
