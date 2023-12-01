import React, { useState } from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Story} from "@storybook/react";
import {PrimaryAutocomplete} from "./primary-autocomplete"
import {PrimaryAutocompleteProps} from "./types";

export default {
    title: "UI-kit/Inputs/Autocomplete/Primary",
    component: PrimaryAutocomplete,
} as Meta;

const Template: Story<PrimaryAutocompleteProps<{name: string, id: number}>> = ({...args}) => {
    const options = [
        {name: 'ua', id: '0'},
        {name: 'en', id: '1'},
        {name: 'ru', id: '2'},
    ]
    const [inputValue, setInputValue] = useState('')
    const [value, setValue] = useState<{name: string, id: string}[]>([
        {name: 'ua', id: '0'},
    ])

    return <div>
        <PrimaryAutocomplete
                      inputValue={inputValue}
                      onInputChange={setInputValue}
                      options={options}
                      isMultiply={true}
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
        </PrimaryAutocomplete>
    </div>
};

export const primaryAutocomplete = Template.bind({});
primaryAutocomplete.args = { label: "Button", sizeMod: "md", mod: 'primary', disabled: false };
