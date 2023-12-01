import React, {ReactElement, ReactNode} from "react";
import {useToggle} from '@hooks'
import {Wrapper, SelectInputWrapper, OptionListWrapper, SelectedValuesWrapper, Label} from "./styles"
import {PrimarySelectOption} from './components/select-option/primary'


import { ReactComponent as ArrowDownIcon } from '@icons/arrows/arrow-down.svg'
import { ReactComponent as CrossIcon } from '@icons/crosses/cross.svg'

import { PrimarySelectProps, SelectItemProps } from "./types"

/**
 * Primary UI component for user interaction
 */
export const PrimarySelect = <
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
  renderActive,
  tabIndex = 1,
  className = ''
}:PrimarySelectProps<TOption, VIsMultiply>):ReactElement  => {
    const IsMultiplySelect = (onChange: ((value: TOption[] | []) => void) | ((value: TOption | undefined) => void), isMultiply?: boolean): onChange is (value: TOption[] | []) => void => {
        return isMultiply || false;
    }
    const IsSelectValueArray = (value: TOption[] | [] | TOption | undefined): value is TOption[] | [] => {
        return Array.isArray(value)
    }
    const IsRenderForMultiply = (renderActive: ((items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[]) | ((item: TOption) => ReactNode), isMultiply?: boolean): renderActive is (items: TOption[], deleteOption: (option: TOption) => void) => ReactNode | ReactNode[] => {
        return isMultiply || false;
    }
    const hasSelectedValue = IsSelectValueArray(value) ? value.length > 0 : Boolean(value)

    const [isSelectOpen, toggleSelect, setSelectState] = useToggle(false),
          closeSelect = () => setSelectState(false),
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
                            : value ? String((value as TOption)[optionValueKey]) : ''
                    }
                </div>
            }


          }


    const deleteSelect = (option: TOption) => {
        if (onChange && IsMultiplySelect(onChange, isMultiply) && IsSelectValueArray(value) && value.find((item) => item[optionValueKey] === option[optionValueKey])) {
            const a = value.filter((item) => item[optionValueKey] !== option[optionValueKey])
            onChange(a)
        }
    }

    const clearSelection = () => {

        if (onChange && IsMultiplySelect(onChange, isMultiply)) {
            onChange([])
        } else if (onChange) {
            onChange(undefined)
        }

    }

    const selectOption = (option: TOption) => {
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
    }

    const fn = (item: ReactElement<SelectItemProps>, option: TOption, isActive: boolean) => {

        const cloned = React.cloneElement(item, {
            onClick: () => {
                !item.props.disabled && selectOption(option)
                !isMultiply && closeSelect()

            },
            isActive
        })

        return cloned
    }
    const optionList = options && options.map((option) => {
        let isActive = false

        if (IsSelectValueArray(value)) {

            if (value.find((item) => item[optionValueKey] === option[optionValueKey])) {
                isActive = true
            }

        } else if (value && (value as TOption)[optionValueKey] === option[optionValueKey]) {
            isActive = true
        }

        const SelectOption = children && fn(children(PrimarySelectOption, option, isActive), option, isActive)

        return SelectOption
    })


    return <Wrapper
                tabIndex={tabIndex}
                onBlur={closeSelect}
                className={className}
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
            </SelectedValuesWrapper>

                {hasSelectedValue && <CrossIcon onClick={clearSelection} />}
                <ArrowDownIcon className='select-arrow' />

        </SelectInputWrapper>

        <Label>{placeholder}</Label>

        <OptionListWrapper >
            {optionList}
        </OptionListWrapper>
    </Wrapper>

};