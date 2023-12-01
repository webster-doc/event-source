import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryAutocompleteSingle } from "./primary-autocomplete-single"
import { PrimaryAutocompleteSingleProps } from './types'

export default {
  title: "UI-kit/Inputs/Autocomplete/Primary/Instances",
  component: PrimaryAutocompleteSingle,
} as Meta;

const Template: Story<PrimaryAutocompleteSingleProps<{name: string, id: string}>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'}
    ]
    const [value, setValue] = useState<{name: string, id: string} | undefined>({name: 'ua', id: '0'}),
          [inputValue, setInputValue] = useState('')


    return (
      <>
          <PrimaryAutocompleteSingle
              options={options}
              value={value}
              onChange={setValue}
              optionValueKey='name'
              optionLabelKey='name'
              inputValue={inputValue}
              onInputChange={setInputValue}
          >
              {(SelectItem, {name}) => {
                  return (<SelectItem key={name} >
                      {name}
                  </SelectItem>)
              }}
          </PrimaryAutocompleteSingle>

      </>)
};

export const primaryAutocompleteSingle = Template.bind({});
primaryAutocompleteSingle.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };