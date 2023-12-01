import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryCheckbox } from "./primary-checkbox"
import { PrimaryCheckboxProps } from "./types";

export default {
  title: "UI-kit/Inputs/Checkbox/Primary",
  component: PrimaryCheckbox,
} as Meta;

const Template: Story<PrimaryCheckboxProps> = (args) => <>
  <PrimaryCheckbox {...args} />
  <br/>
  <br/>
  <PrimaryCheckbox {...args} />
</>;

export const primaryCheckbox = Template.bind({});
primaryCheckbox.args = { label: "Button", size: "md", mod: 'primary', disabled: false, labelPosition: 'left' };