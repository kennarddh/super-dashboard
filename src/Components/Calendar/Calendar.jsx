import React, { useState } from 'react'

import { Container, Tiles, Tile, ChangeMonthButton, Row } from './Styles'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

const Calendar = () => {
	const [Unix, SetUnix] = useState(() => new Date().getTime())
	const [SelectedDate, SetSelectedDate] = useState()

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

	const SelectDate = unix => {
		SetSelectedDate(unix)
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
						<Tile red={GetDay(Unix) === 6}>
							{daysInLastMonth - 5}
						</Tile>
					)}
					{GetDay(Unix) >= 5 && (
						<Tile red={GetDay(Unix) === 5}>
							{daysInLastMonth - 4}
						</Tile>
					)}
					{GetDay(Unix) >= 4 && (
						<Tile red={GetDay(Unix) === 4}>
							{daysInLastMonth - 3}
						</Tile>
					)}
					{GetDay(Unix) >= 3 && (
						<Tile red={GetDay(Unix) === 3}>
							{daysInLastMonth - 2}
						</Tile>
					)}
					{GetDay(Unix) >= 2 && (
						<Tile red={GetDay(Unix) === 2}>
							{daysInLastMonth - 1}
						</Tile>
					)}
					{GetDay(Unix) >= 1 && (
						<Tile red={GetDay(Unix) === 1}>{daysInLastMonth}</Tile>
					)}
					{Array(
						GetDaysInMonth(
							new Date(Unix).getFullYear(),
							new Date(Unix).getMonth() + 1
						)
					)
						.fill(null)
						.map((_, i) => {
							const date = new Date(Unix)
							date.setDate(i + 1)

							const props = {}

							if (
								i === new Date().getDate() - 1 &&
								new Date(Unix).getMonth() ===
									new Date().getMonth() &&
								new Date(Unix).getFullYear() ===
									new Date().getFullYear()
							)
								props.current = true

							if (
								SelectedDate &&
								i === new Date(SelectedDate).getDate() - 1 &&
								new Date(Unix).getMonth() ===
									new Date(SelectedDate).getMonth() &&
								new Date(Unix).getFullYear() ===
									new Date(SelectedDate).getFullYear()
							)
								props.selected = true

							if (date.getDay() === 0) props.red = true

							return (
								<Tile
									key={i}
									{...props}
									onClick={() => SelectDate(date.getTime())}
								>
									{i + 1}
								</Tile>
							)
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
