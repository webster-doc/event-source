import React, {useState} from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import { PrimaryAutocompleteMultiply } from "./primary-autocomplete-multiply"
import {PrimaryAutocompleteMultiplyProps} from './types'

export default {
  title: "UI-kit/Inputs/Autocomplete/Primary/Instances",
  component: PrimaryAutocompleteMultiply,
} as Meta;

const Template: Story<PrimaryAutocompleteMultiplyProps<{name: string, id: string}>> = (args) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [value, setValue] = useState<{name: string, id: string}[] | []>([
            {name: 'ua', id: '0'},
        ]),
        [inputValue, setInputValue] = useState('')


    return (
      <>
          <PrimaryAutocompleteMultiply
              options={options}
              value={value}
              onChange={setValue}
              inputValue={inputValue}
              onInputChange={setInputValue}
              optionValueKey='id'
              optionLabelKey='name'
          >
              {(SelectItem, {id, name}) => {
                  return (<SelectItem key={id}  >
                      {name}
                  </SelectItem>)
              }}
          </PrimaryAutocompleteMultiply>

      </>)
};

export const primaryAutocompleteMultiply = Template.bind({});
primaryAutocompleteMultiply.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };