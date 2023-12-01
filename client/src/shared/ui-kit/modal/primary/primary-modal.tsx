import React, {FC} from "react";
import { ReactComponent as CrossIcon } from '@icons/crosses/cross.svg'
import {OverlayingModal} from './../components/overlaying'

import {Wrapper, CloseBtnWrapper} from './styles'

import {PrimaryModalProps} from './types'


export const PrimaryModal: FC<PrimaryModalProps> = ({isOpen, onClose, children}) => {
    return (<OverlayingModal isOpen={isOpen} onClose={onClose} >
        <Wrapper>
            <CloseBtnWrapper onClick={onClose} >
                <CrossIcon/>
            </CloseBtnWrapper>
            {children}
        </Wrapper>
    </OverlayingModal>)
}