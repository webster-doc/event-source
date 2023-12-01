export interface BoxProps {
    isRelative?: boolean,
    alignItems?: 'center' | 'flex-start' | 'flex-end',
    direction?: 'column' | 'row',
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-around' | 'space-between',
    isFluid?: boolean,
    isFullWidth?: boolean
    isFullHeight?: boolean
    gap?: string
}