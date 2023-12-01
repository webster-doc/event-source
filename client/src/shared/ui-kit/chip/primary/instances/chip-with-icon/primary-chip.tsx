import React, {FC} from "react";
import {PrimaryChip} from "./../../index";
import {IconWrapper} from './styles'

import {PrimaryChipWithIconProps} from './types'
import {iconList} from "./const";


export const PrimaryChipWithIcon: FC<PrimaryChipWithIconProps> = ({icon, ...props}) => {

    
    return (<PrimaryChip {...props}
                               renderBeforeLabel={icon && (() => (<IconWrapper>
                                   {iconList[icon]()}
                               </IconWrapper>))}
    />)
}