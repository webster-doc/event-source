import React, {FC} from "react";
import { Text } from '@typography'
import { TooltipWrapper, Wrapper } from './styles'

import { PrimaryTooltipProps } from './types'


export const PrimaryTooltip: FC<PrimaryTooltipProps> = ({title, placement= 'top-center', isNowrap= true, children, ...props}) => {
    return (<Wrapper {...props} >
        <TooltipWrapper placement={placement} isNowrap={isNowrap} >
            <Text>{title}</Text>
        </TooltipWrapper>
        {children}
    </Wrapper>)
}