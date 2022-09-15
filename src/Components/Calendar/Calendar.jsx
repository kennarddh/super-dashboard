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

	const GetDay = unix => {
		const date = new Date(unix)

		date.setDate(1)

		return date.getDay()
	}

	const date = new Date(Unix)
	const month = date.getMonth() - 1
	const daysInLastMonth = GetDaysInMonth(date.getFullYear(), month + 1)

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
					<Tile>Sun</Tile>
					<Tile>Mon</Tile>
					<Tile>Tue</Tile>
					<Tile>Wed</Tile>
					<Tile>Thu</Tile>
					<Tile>Fri</Tile>
					<Tile>Sat</Tile>
					{GetDay(Unix) >= 6 && (
						<Tile current={GetDay(Unix) === 6}>
							1{daysInLastMonth - 5}
						</Tile>
					)}
					{GetDay(Unix) >= 5 && (
						<Tile current={GetDay(Unix) === 5}>
							2{daysInLastMonth - 4}
						</Tile>
					)}
					{GetDay(Unix) >= 4 && (
						<Tile current={GetDay(Unix) === 4}>
							3{daysInLastMonth - 3}
						</Tile>
					)}
					{GetDay(Unix) >= 3 && (
						<Tile current={GetDay(Unix) === 3}>
							4{daysInLastMonth - 2}
						</Tile>
					)}
					{GetDay(Unix) >= 2 && (
						<Tile current={GetDay(Unix) === 2}>
							5{daysInLastMonth - 1}
						</Tile>
					)}
					{GetDay(Unix) >= 1 && (
						<Tile current={GetDay(Unix) === 1}>
							6{daysInLastMonth}
						</Tile>
					)}
					{Array(
						GetDaysInMonth(
							new Date(Unix).getFullYear(),
							new Date(Unix).getMonth() + 1
						)
					)
						.fill(null)
						.map((_, i) => {
							if (
								i === new Date().getDate() - 1 &&
								new Date(Unix).getMonth() ===
									new Date().getMonth() &&
								new Date(Unix).getFullYear() ===
									new Date().getFullYear()
							)
								return (
									<Tile key={i} current>
										{i + 1}
									</Tile>
								)

							const date = new Date(Unix)
							date.setDate(i + 1)

							if (date.getDay() === 0)
								return (
									<Tile key={i} current>
										{i + 1}
									</Tile>
								)

							return <Tile key={i}>{i + 1}</Tile>
						})}
				</Tiles>
				<ChangeMonthButton onClick={() => ChangeMonth(1)}>
					&gt;
				</ChangeMonthButton>
			</Row>
		</Container>
	)
}

export default Calendar
