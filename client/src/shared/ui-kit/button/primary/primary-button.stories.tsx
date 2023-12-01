import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import {PrimaryButton} from "./primary-button"
import { ButtonProps } from "./types";

export default {
  title: "UI-kit/Button/Primary",
  component: PrimaryButton,
} as Meta;

const Template: Story<ButtonProps> = (args) => <PrimaryButton {...args} />;

export const primaryButton = Template.bind({});
primaryButton.args = { label: "Button", sizeMod: "sm", mod: 'primary' };