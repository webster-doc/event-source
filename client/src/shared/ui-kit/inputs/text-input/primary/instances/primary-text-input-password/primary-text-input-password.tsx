import React, {useState, MouseEvent, FC} from 'react'
import { PrimaryTextInput } from "@inputs/text-input/primary"
import { ReactComponent as EyeCloseIcon } from '@icons/input/eye-close.svg'
import { ReactComponent as EyeOpenIcon } from '@icons/input/eye-open.svg'

import { PrimaryTextInputPasswordProps } from './types'


export const PrimaryTextInputPassword:FC<PrimaryTextInputPasswordProps> = ({type = 'text', ...props}) => {
    const [inputType, setInputType] = useState(type),
          togglePasswordVisibilityHandler = (e: MouseEvent<HTMLElement>) => {
            e.preventDefault()
            setInputType(inputType !== 'password' ? 'password' : 'text')
          }

    return <PrimaryTextInput
        {...props}
        type={inputType}
        RightIcon={() => (<div onClick={togglePasswordVisibilityHandler} >
            {inputType === 'password' ? <EyeOpenIcon/> : <EyeCloseIcon/> }
        </div>)}
    />

}