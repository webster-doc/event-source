import { PrimaryTextInputProps } from "../../index"
export type { PrimaryInputChangeHandler } from "../../index"

export interface PrimaryTextInputWithHintProps extends Omit<PrimaryTextInputProps, 'type' | 'LeftIcon' | 'RightIcon'> {
    hint?: string,
    icon?: 'user' | 'laptop'
}