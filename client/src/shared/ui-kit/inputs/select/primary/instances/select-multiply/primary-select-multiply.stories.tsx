import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySelectMultiply } from "./primary-select-multiply"
import { PrimarySelectMultiplyProps } from "./types";

export default {
  title: "UI-kit/Inputs/Select/Primary/Instances",
  component: PrimarySelectMultiply,
} as Meta;

const Template: Story<PrimarySelectMultiplyProps<{name: string, id: string}>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState<{name: string, id: string}[] | []>([
        {name: 'ua', id: '0'},
    ])

  return (
      <>
          <PrimarySelectMultiply
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey='id'
              optionLabelKey='name'
          >
              {(SelectItem, {id, name}) => {
                  return (<SelectItem key={id}  >
                      {name}
                  </SelectItem>)
              }}
          </PrimarySelectMultiply>

      </>)
};

export const primarySelectMultiply = Template.bind({});
primarySelectMultiply.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };