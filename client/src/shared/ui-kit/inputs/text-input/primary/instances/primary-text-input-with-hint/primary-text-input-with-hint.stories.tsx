import React, {useState} from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import { PrimaryTextInputWithHint } from "./primary-text-input-with-hint"
import { PrimaryTextInputWithHintProps, PrimaryInputChangeHandler } from "./types";

export default {
    title: "UI-kit/Inputs/TextInput/Primary/Instances",
    component: PrimaryTextInputWithHint,
    argTypes: {
        icon: {
            options: ['user', 'laptop', null],
            control: { type: 'radio'}
        },
    }
} as Meta;

const Template: Story<PrimaryTextInputWithHintProps> = ({...args}) => {
    const [value, setValue] = useState(''),
          inputChangeHandler:PrimaryInputChangeHandler = (value) => {
            setValue(value)
          }

    return <div>
        <PrimaryTextInputWithHint {...args} value={value} onChange={inputChangeHandler} />
    </div>
};

export const primaryTextInputWithHint = Template.bind({});
primaryTextInputWithHint.args = { label: "Label", sizeMod: "md", mod: 'primary', disabled: false, type: 'text', error: '', hint: 'Input description'};
