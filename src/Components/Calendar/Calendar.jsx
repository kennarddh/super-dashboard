import React, { useState, useId } from 'react'

import {
	Container,
	Tiles,
	Tile,
	ChangeMonthButton,
	Row,
	Form,
	Input,
} from './Styles'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

const Calendar = () => {
	const [Unix, SetUnix] = useState(() => new Date().getTime())
	const [SelectedDate, SetSelectedDate] = useState()

	const ChangeMonth = (add, increment = false) => {
		SetUnix(unix => {
			const date = new Date(unix)

			if (!increment) {
				date.setMonth(date.getMonth() + add)
			} else {
				date.setMonth(add)
			}

			return date.getTime()
		})
	}

	const ChangeYear = (add, increment = false) => {
		SetUnix(unix => {
			const date = new Date(unix)

			if (!increment) {
				date.setFullYear(date.getFullYear() + add)
			} else {
				date.setFullYear(add)
			}

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

	const id = useId()

	return (
		<Container>
			<Row>
				<Form>
					<label htmlFor={`${id}-year`}>Year</label>
					<Input
						type='number'
						placeholder='Year'
						id={`${id}-year`}
						value={new Date(Unix).getFullYear()}
						onChange={({ target: { value } }) =>
							ChangeYear(
								parseInt(
									value || `${new Date().getFullYear()}`,
									10
								),
								true
							)
						}
					/>
					<label htmlFor={`${id}-month`}>Month</label>
					<Input
						type='number'
						placeholder='Month'
						id={`${id}-month`}
						value={new Date(Unix).getMonth() + 1}
						onChange={({ target: { value } }) =>
							ChangeMonth(parseInt(value || '0', 10) - 1, true)
						}
					/>
				</Form>
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
						<Tile red={GetDay(Unix) === 6} lowerOpacity>
							{daysInLastMonth - 5}
						</Tile>
					)}
					{GetDay(Unix) >= 5 && (
						<Tile red={GetDay(Unix) === 5} lowerOpacity>
							{daysInLastMonth - 4}
						</Tile>
					)}
					{GetDay(Unix) >= 4 && (
						<Tile red={GetDay(Unix) === 4} lowerOpacity>
							{daysInLastMonth - 3}
						</Tile>
					)}
					{GetDay(Unix) >= 3 && (
						<Tile red={GetDay(Unix) === 3} lowerOpacity>
							{daysInLastMonth - 2}
						</Tile>
					)}
					{GetDay(Unix) >= 2 && (
						<Tile red={GetDay(Unix) === 2} lowerOpacity>
							{daysInLastMonth - 1}
						</Tile>
					)}
					{GetDay(Unix) >= 1 && (
						<Tile red={GetDay(Unix) === 1} lowerOpacity>
							{daysInLastMonth}
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
