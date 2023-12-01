import React, {FC} from 'react'
import {Text} from '@typography'
import { Wrapper, IconWrapper } from './styles'
import { ReactComponent as CrossIcon } from '@icons/crosses/cross.svg'

import {PrimaryChipProps} from './types'


export const PrimaryChip: FC<PrimaryChipProps> = ({
                                                      renderBeforeLabel,
                                                      renderAfterLabel,
                                                      sizeMod = 'md',
                                                      mod = 'primary',
                                                      color= 'primary',
                                                      label,
                                                      onDelete,
                                                      DeleteIcon
}) => {

    return <Wrapper sizeMod={sizeMod} mod={mod} color={color} >
        {renderBeforeLabel && renderBeforeLabel()}
        <Text>{label}</Text>
        {renderAfterLabel && renderAfterLabel()}
        {onDelete && <IconWrapper onClick={onDelete} >
            {typeof DeleteIcon === 'function' ? DeleteIcon() : DeleteIcon || <CrossIcon />}
        </IconWrapper>}
    </Wrapper>
}