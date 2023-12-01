import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimarySelect } from "./primary-select"
import { PrimarySelectProps } from "./types";

export default {
  title: "UI-kit/Inputs/Select/Primary",
  component: PrimarySelect,
} as Meta;

const Template: Story<PrimarySelectProps<{name: string, id: number}, boolean>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState<{name: string, id: string}[]>([
        {name: 'ua', id: '0'},
    ])

  return (
      <>
          <PrimarySelect
              isMultiply
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey='id'
              optionLabelKey='name'
              renderActive={(item, deleteOption) => {
                  return item.map(({name}, index) => (
                      <div>
                          {index > 0 && ', '}{name}
                      </div>
                  ))
              }}
          >
              {(SelectItem, {id, name}) => {
                  return (<SelectItem key={id}  >
                      {name}
                  </SelectItem>)
              }}
          </PrimarySelect>

      </>)
};

export const primarySelect = Template.bind({});
primarySelect.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };