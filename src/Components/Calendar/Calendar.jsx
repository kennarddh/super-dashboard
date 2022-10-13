import React, { useState, useId, useCallback, useEffect } from 'react'

import {
	Container,
	Tiles,
	Tile,
	Row,
	Form,
	Input,
	HolidaysContainer,
} from './Styles'

import RectangleButton from 'Components/Button/Rectangle/Rectangle'

import GetDaysInMonth from 'Utils/GetDaysInMonth'

import GetTileProps from './GetTileProps'

const Calendar = () => {
	const [Unix, SetUnix] = useState(() => new Date().getTime())
	const [SelectedDate, SetSelectedDate] = useState()
	const [Holidays, SetHolidays] = useState({})

	const ChangeMonth = (add, increment = true) => {
		SetUnix(unix => {
			const date = new Date(unix)

			if (increment) {
				date.setMonth(date.getMonth() + add)
			} else {
				date.setMonth(add)
			}

			return date.getTime()
		})
	}

	const ChangeYear = (add, increment = true) => {
		SetUnix(unix => {
			const date = new Date(unix)

			if (increment) {
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

	const FetchHolidays = useCallback(() => {
		const controller = new AbortController()

		const searchParams = new URLSearchParams({
			month: new Date(Unix).getMonth() + 1,
			year: new Date(Unix).getFullYear(),
		})

		fetch(`https://api-harilibur.vercel.app/api?${searchParams}`, {
			signal: controller.signal,
		})
			.then(response => response.json())
			.then(data => {
				SetHolidays(
					data.reduce((acc, val) => {
						if (!acc[val.holiday_date]) {
							acc[val.holiday_date] = []
						}

						acc[val.holiday_date].push({
							name: val.holiday_name,
							isNational: val.is_national_holiday,
						})

						return acc
					}, {})
				)
			})
			.catch(error => console.log({ location: 'Calendar', error }))

		return () => controller.abort()
	}, [Unix])

	useEffect(() => {
		const abort = FetchHolidays()

		return () => abort()
	}, [FetchHolidays])

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
								false
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
							ChangeMonth(parseInt(value || '0', 10) - 1, false)
						}
					/>
				</Form>
			</Row>
			<Row>
				<Tiles>
					<Tile>Sun</Tile>
					<Tile>Mon</Tile>
					<Tile>Tue</Tile>
					<Tile>Wed</Tile>
					<Tile>Thu</Tile>
					<Tile>Fri</Tile>
					<Tile>Sat</Tile>
					{Array(6)
						.fill(null)
						.map((_, i) => {
							if (GetDay(Unix) <= i) return null

							return (
								<Tile
									key={i}
									red={GetDay(Unix) === i}
									lowerOpacity
								>
									{daysInLastMonth - i}
								</Tile>
							)
						})
						.reverse()}

					{Array(
						GetDaysInMonth(
							new Date(Unix).getFullYear(),
							new Date(Unix).getMonth() + 1
						)
					)
						.fill(null)
						.map((_, i) => {
							const props = GetTileProps(
								i,
								SelectedDate,
								Holidays,
								Unix
							)

							const date = new Date(Unix)

							date.setDate(i + 1)

							return (
								<Tile
									key={i}
									onClick={() => SelectDate(date.getTime())}
									{...props}
								>
									{i + 1}
								</Tile>
							)
						})}
				</Tiles>
			</Row>
			<Row left width100>
				<HolidaysContainer>
					{Object.entries(Holidays).map(([date, holidays]) => (
						<figure key={date}>
							<figcaption>{date}</figcaption>
							<ul>
								{holidays.map(holiday => (
									<li key={holiday.name}>
										<span>
											{holiday.isNational
												? 'National: '
												: ''}
										</span>
										{holiday.name}
									</li>
								))}
							</ul>
						</figure>
					))}
				</HolidaysContainer>
			</Row>
			<Row width100>
				<RectangleButton width='100%' height={30} radius={15}>
					To Do
				</RectangleButton>
			</Row>
			<Row>Indonesian Holidays</Row>
		</Container>
	)
}

export default Calendar
