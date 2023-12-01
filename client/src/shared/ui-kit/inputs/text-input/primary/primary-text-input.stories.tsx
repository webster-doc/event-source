import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryTextInput, PrimaryInputChangeHandler } from "./index"
import { PrimaryTextInputProps } from "./types";
import { ReactComponent as UserIcon } from '@icons/user.svg'
import { ReactComponent as HintIcon } from '@icons/hint.svg'



export default {
  title: "UI-kit/Inputs/TextInput/Primary",
  component: PrimaryTextInput,
} as Meta;


const Template: Story<PrimaryTextInputProps> = (args) => {
  const [value, setValue] = useState(''),
        inputChangeHandler:PrimaryInputChangeHandler = (value) => {
          setValue(value)
        }

  return (<>
    <PrimaryTextInput
        {...args}
        value={value}
        onChange={inputChangeHandler}
        LeftIcon={<UserIcon />}
    />
    <br/>
    <PrimaryTextInput
          {...args}
          value={value}
          onChange={inputChangeHandler}
          RightIcon={<HintIcon />}
    />
    <br/>
    <PrimaryTextInput
          {...args}
          value={value}
          onChange={inputChangeHandler}
    />
  </>)
}

export const primaryTextInput = Template.bind({});
primaryTextInput.args = { label: "Label", sizeMod: "md", mod: 'primary', disabled: false, type: 'text', error: ''};