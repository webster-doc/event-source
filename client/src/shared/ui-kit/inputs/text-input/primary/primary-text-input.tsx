import React, {FC, ChangeEventHandler} from "react";
import {useSwitch} from "@hooks"
import {Wrapper, Input, Label, InputWrapper, Error, IconWrapper } from "./styles"
import {PrimaryTextInputProps} from "./types"

/**
 * Primary text input
 */
export const PrimaryTextInput:FC<PrimaryTextInputProps> = React.forwardRef(({
   label = 'placeholder',
   error,
   sizeMod= 'md',
   LeftIcon,
   RightIcon,
   className = '',
   // onChange,
   ...props
}, ref)  => {

    const [isInputFilled, setInputFilled, setInputEmpty] = useSwitch(String(props.value || '').length > 0),
          hasError = error && error.length > 0,
          hasLeftIcon = Boolean(LeftIcon),
          hasRightIcon = Boolean(RightIcon),
          changeEventHandler: ChangeEventHandler<HTMLInputElement> = (e) => {
              let value = e.target.value

              if (isInputFilled && value.length === 0) {
                  setInputEmpty()
              }

              if (!isInputFilled && value.length > 0) {
                  setInputFilled()
              }

              props.onChange && props.onChange(e)
          }

    return (<Wrapper className={className} >
        <InputWrapper>
            {hasLeftIcon && <IconWrapper position='left' sizeMod={sizeMod} >
                {typeof LeftIcon === 'function' ? LeftIcon() : LeftIcon}
            </IconWrapper>}
            {hasRightIcon && <IconWrapper position='right' sizeMod={sizeMod} >
                {typeof RightIcon === 'function' ? RightIcon() : RightIcon}
            </IconWrapper>}

            <Input
                {...props}
                ref={ref}
                onChange={changeEventHandler}
                autoComplete={'off'}
                isInputFilled={isInputFilled}
                sizeMod={sizeMod}
                hasError={hasError}
            />
            <Label>{label}</Label>
        </InputWrapper>
        <Error isVisible={hasError} >
            {error}
        </Error>
    </Wrapper>)
})