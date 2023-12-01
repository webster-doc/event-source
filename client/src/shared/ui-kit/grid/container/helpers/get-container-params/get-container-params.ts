import { GetContainerParams } from './types'

export const getContainerParams: GetContainerParams = ({ mobile, tablet, desktop }) => {
    return {
        containerWidth_mobile: `${mobile.with + mobile.securedFieldsWidth * 2}px`,
        securedFieldWidth_mobile: `${mobile.securedFieldsWidth}px`,
        containerWidth_tablet: `${tablet.with + tablet.securedFieldsWidth * 2}px`,
        securedFieldWidth_tablet: `${tablet.securedFieldsWidth}px`,
        containerWidth_desktop: `${desktop.with + desktop.securedFieldsWidth * 2}px`,
        securedFieldWidth_desktop: `${desktop.securedFieldsWidth}px`,
    }
}
