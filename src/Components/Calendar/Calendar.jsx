import React from 'react'

import { Container, Tiles, Tile } from './Styles'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

const Calendar = () => {
	return (
		<Container>
			<Tiles>
				{Array(GetDaysInMonth(2022, 9))
					.fill(null)
					.map((_, i) => (
						<Tile key={i}>{i + 1}</Tile>
					))}
			</Tiles>
		</Container>
	)
}

export default Calendar
