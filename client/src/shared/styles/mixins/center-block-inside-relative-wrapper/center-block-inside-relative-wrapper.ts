import { css } from 'styled-components'

import { CenterBlockInsideRelativeWrapper } from './types'

export const centerBlockInsideRelativeWrapper: CenterBlockInsideRelativeWrapper = (props= {}) => {
    const {axis = 'both', additionalTransformValues} = props
    let styles = css``

    switch (axis) {
        case `x`:
            styles = css`
                position: absolute;
                left: 50%;
                transform: translateX(-50%) ${additionalTransformValues};
            `
            break
        case `y`:
            styles = css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%) ${additionalTransformValues};
            `
            break
        case `both`:
            styles = css`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) ${additionalTransformValues};
            `
            break
    }

    return styles
}
