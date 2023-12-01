import React from 'react'

import { Content } from './styles'

import { Header } from './components/header'
import { Footer } from './components/footer'

export const Template = ({children}) => {
    return (<>
        <Header />
        <Content>
            {children}
        </Content>
        <Footer appName='zb-lesson' copyrightDate={new Date()} />
    </>)}