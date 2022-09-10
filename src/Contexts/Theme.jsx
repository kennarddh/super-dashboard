import React, { createContext, useEffect, useState } from 'react'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import DefaultTheme from 'Constants/Theme'

export const ThemeContext = createContext({})

const ThemeProvider = ({ children }) => {
	const [Theme, SetTheme] = useState('light')

	useEffect(() => {
		const localTheme = localStorage.getItem('theme')

		if (localTheme) {
			SetTheme(localTheme)
		}
	}, [])

	const ChangeTheme = theme => {
		if (!Object.keys(DefaultTheme).includes(theme)) return false

		localStorage.setItem('theme', theme)

		SetTheme(theme)

		return true
	}

	return (
		<ThemeContext.Provider value={{ ChangeTheme, Theme }}>
			<StyledThemeProvider theme={DefaultTheme[Theme]}>
				{children}
			</StyledThemeProvider>
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
