import { PrimaryTextInputProps } from "../../index"
export type { PrimaryInputChangeHandler } from "../../index"

export interface PrimaryTextInputPasswordProps extends Omit<PrimaryTextInputProps, 'type' | 'LeftIcon' | 'RightIcon'> {
    type?: 'password' | 'text'
}