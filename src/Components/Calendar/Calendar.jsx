import React, { useState } from 'react'

import { Container, Tiles, Tile, ChangeMonthButton, Row } from './Styles'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

const Calendar = () => {
	const [Unix, SetUnix] = useState(() => new Date().getTime())

	const ChangeMonth = add => {
		SetUnix(unix => {
			const date = new Date(unix)

			date.setMonth(date.getMonth() + add)

			return date.getTime()
		})
	}

	return (
		<Container>
			<Row>
				<p>
					{new Date(Unix).getMonth() + 1}/
					{new Date(Unix).getFullYear()}
				</p>
			</Row>
			<Row>
				<ChangeMonthButton onClick={() => ChangeMonth(-1)}>
					&lt;
				</ChangeMonthButton>
				<Tiles>
					{Array(
						GetDaysInMonth(
							new Date(Unix).getFullYear(),
							new Date(Unix).getMonth() + 1
						)
					)
						.fill(null)
						.map((_, i) => (
							<Tile key={i}>{i + 1}</Tile>
						))}
				</Tiles>
				<ChangeMonthButton onClick={() => ChangeMonth(1)}>
					&gt;
				</ChangeMonthButton>
			</Row>
		</Container>
	)
}

export default Calendar
