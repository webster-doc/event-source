export interface ContainerData {
    mobile: {
        with: number
        securedFieldsWidth: number
    }
    tablet: {
        with: number
        securedFieldsWidth: number
    }
    desktop: {
        with: number
        securedFieldsWidth: number
    }
}

interface ContainerParams {
    containerWidth_mobile: string
    securedFieldWidth_mobile: string
    containerWidth_tablet: string
    securedFieldWidth_tablet: string
    containerWidth_desktop: string
    securedFieldWidth_desktop: string
}

export type GetContainerParams = (containerData: ContainerData) => ContainerParams
