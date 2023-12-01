import React, {ChangeEventHandler, ReactElement, ReactNode} from "react";
import {useToggle} from '@hooks'
import {Wrapper, SelectInputWrapper, OptionListWrapper, SelectedValuesWrapper, Label, SearchInput} from "./styles"
import {PrimarySelectOption} from './components/select-option/primary'


import { ReactComponent as ArrowDownIcon } from '@icons/arrows/arrow-down.svg'
import { ReactComponent as CrossIcon } from '@icons/crosses/cross.svg'

import { PrimaryAutocompleteProps, SelectItemProps } from "./types"

/**
 * Primary UI component for user interaction
 */
export const PrimaryAutocomplete = <
    TOption extends object,
    VIsMultiply extends boolean = false
    >({
  sizeMod = "md",
  mod = 'primary',
  name= 'select',
  placeholder = 'Placeholder',
  options,
  isMultiply,
  children,
  optionValueKey,
  optionLabelKey,
  onChange,
  value,
  onInputChange,
  inputValue,
  renderActive,
  tabIndex = 1,
}:PrimaryAutocompleteProps<TOption, VIsMultiply>):ReactElement  => {
    const IsMultiplySelect = (onChange: ((value: TOption[] | []) => void) | ((value: TOption | undefined) => void), isMultiply?: boolean): onChange is (value: TOption[] | []) => void => {
            return isMultiply || false;
          },
          IsSelectValueArray = (value: TOption[] | [] | TOption | undefined): value is TOption[] | [] => {
            return Array.isArray(value)
          },
          IsRenderForMultiply = (renderActive: ((items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[]) | ((item: TOption) => ReactNode), isMultiply?: boolean): renderActive is (items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[] => {
            return isMultiply || false;
          }

    const hasSelectedValue = IsSelectValueArray(value) ? value.length > 0 : Boolean(value),
          [isSelectOpen, toggleSelect, setSelectState] = useToggle(false),
          inputChangeHandler:ChangeEventHandler<HTMLInputElement> = (e) => {
              onInputChange(e.target.value)
          },
          closeSelect = () => setSelectState(false),
          deleteSelect = (option: TOption) => {
            if (onChange && IsMultiplySelect(onChange, isMultiply) && IsSelectValueArray(value) && value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
                onChange(a)
            }
          },
          clearSelection = () => {

              if (onChange && IsMultiplySelect(onChange, isMultiply)) {
                  onChange([])
              } else if (onChange) {
                  onChange(undefined)
              }

              onInputChange('')
          },
          optionClickHandler = (option: TOption) => {
              if (onChange && IsMultiplySelect(onChange, isMultiply)) {

                  if (IsSelectValueArray(value)) {

                      if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                          const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
                          onChange(a)
                      } else {
                          onChange([...value, option])
                      }

                  }

              } else if (!IsSelectValueArray(value) && onChange && !IsMultiplySelect(onChange, isMultiply)) {
                  onChange(option)
              }
          },
          SelectedItem = () => {

            if (renderActive) {
                return IsRenderForMultiply(renderActive, isMultiply)
                    ? renderActive(value as TOption[], deleteSelect)
                    : renderActive(value as TOption)
            } else {
                return <div>
                    {
                        IsSelectValueArray(value)
                            ? value.map((item) => (item[optionLabelKey])).join(', ')
                            : ''
                    }
                </div>
            }


          },
          optionWrapper = (item: ReactElement<SelectItemProps>, option: TOption, isActive: boolean) => {

            const cloned = React.cloneElement(item, {
                onClick: () => {
                    !item.props.disabled && optionClickHandler(option)
                    !isMultiply && closeSelect()

                    isMultiply ? onInputChange('') : onInputChange(String((option as TOption)[optionValueKey]))
                },
                isActive
            })

            return cloned
         },
         optionList = options && options.filter((option) => {

             if (inputValue.length) {

                 if (String((option as TOption)[optionLabelKey]).includes(inputValue)) {
                     return true
                 }

             } else {
                 return true
             }

             return false

         }).map((option) => {
            let isActive = false

            if (IsSelectValueArray(value)) {

                if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                    isActive = true
                }

            } else if (value && (value as TOption)[optionValueKey] === option[optionValueKey]) {
                isActive = true
            }

            const SelectOption = children && optionWrapper(children(PrimarySelectOption, option, isActive), option, isActive)

            return SelectOption
        })


    return <Wrapper
                tabIndex={tabIndex}
                onBlur={closeSelect}
    >
        <SelectInputWrapper
            onClick={toggleSelect}
            isSelectOpen={isSelectOpen}
            hasSelectedValue={hasSelectedValue}
        >

            <SelectedValuesWrapper>
                {
                    SelectedItem()
                }
                <SearchInput value={inputValue} onChange={inputChangeHandler} />
                <Label>{placeholder}</Label>
            </SelectedValuesWrapper>

            {hasSelectedValue && <CrossIcon onClick={clearSelection} />}
            <ArrowDownIcon className='select-arrow' />

        </SelectInputWrapper>

        <OptionListWrapper >
            {optionList.length ? optionList : <PrimarySelectOption>No options</PrimarySelectOption>}
        </OptionListWrapper>
    </Wrapper>

};