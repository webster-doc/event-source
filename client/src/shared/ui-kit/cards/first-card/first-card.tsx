import React, {FC} from "react";
import {Wrapper} from './styles'

import {FirstCardProps} from './types'


export const FirstCard: FC<FirstCardProps> = ({children}) => {
    return (<Wrapper>
        {children}
    </Wrapper>)
}