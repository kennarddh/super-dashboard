import React, { useContext } from 'react'

import { ThemeContext } from 'Contexts/Theme'

import { Button } from './Styles'

const ToggleTheme = () => {
	const { Theme, ChangeTheme } = useContext(ThemeContext)

	const OnClick = () => {
		ChangeTheme(Theme === 'light' ? 'dark' : 'light')
	}

	return (
		<Button onClick={OnClick}>
			Change Theme to {Theme === 'light' ? 'dark' : 'light'}
		</Button>
	)
}

export default ToggleTheme
