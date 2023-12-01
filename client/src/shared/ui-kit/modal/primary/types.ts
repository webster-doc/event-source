import {ReactNode} from "react";
import { OverlayingModalProps } from './../components/overlaying'

export interface PrimaryModalProps extends OverlayingModalProps {
    children?: ReactNode
}