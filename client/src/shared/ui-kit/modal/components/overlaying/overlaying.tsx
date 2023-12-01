import React, { FC } from "react";
import { Overlay, Wrapper } from "./styles";

import { OverlayingModalProps } from './types'

export const OverlayingModal: FC<OverlayingModalProps> = ({ children, onClose, isOpen }) => {
    return (
        <Wrapper {...{ isOpen }}>
            <Overlay onClick={onClose} />
            {children}
        </Wrapper>
    )
}
