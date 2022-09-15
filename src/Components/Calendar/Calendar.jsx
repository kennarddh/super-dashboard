import React from 'react'

import { Container, Tiles, Tile, ChangeMonthButton } from './Styles'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

const Calendar = () => {
	return (
		<Container>
			<ChangeMonthButton>&lt;</ChangeMonthButton>
			<Tiles>
				{Array(GetDaysInMonth(2022, 9))
					.fill(null)
					.map((_, i) => (
						<Tile key={i}>{i + 1}</Tile>
					))}
			</Tiles>
			<ChangeMonthButton>&gt;</ChangeMonthButton>
		</Container>
	)
}

export default Calendar
