import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { primaryTheme } from '@app-theme'
import { Template } from './components/template'
import { GlobalStyles } from "@global-styles"
import { routes } from './routes'

export const App = () => {

	return (
		<BrowserRouter>
			<ThemeProvider theme={primaryTheme} >
				<GlobalStyles/>
				<Template>
					<Routes>
						{routes.map(({element, ...routeProps}, i) => (<Route key={routeProps.path} element={element()} {...routeProps} />))}
					</Routes>
				</Template>
			</ThemeProvider>
		</BrowserRouter>
	)
}


