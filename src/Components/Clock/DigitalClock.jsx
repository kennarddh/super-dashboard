import React, { useEffect, useState } from 'react'

import {
	TimeContainer,
	TimeText,
	TimeContainerParent,
} from './DigitalClockStyles.jsx'

const DigitalClock = () => {
	const [Timezone] = useState([
		'UTC+2',
		'UTC+3',
		'UTC+4',
		'UTC+5',
		'UTC+6',
		'UTC+7',
	])

	const [Time, SetTime] = useState({})

	useEffect(() => {
		const intervalIds = []

		if (!Timezone) return
		if (Timezone === null) return
		if (Timezone === undefined) return
		if (Timezone.length < 1) return

		Timezone.forEach(timezone => {
			const hourAdd = parseInt(timezone.split('UTC')[1])

			const offset = new Date().getTimezoneOffset()

			const date = new Date(
				new Date().getTime() + offset * 60000 + hourAdd * 60 * 60000
			)

			const intervalId = setInterval(() => {
				SetTime(time => {
					let newDate = date

					if (time[timezone]?.date) {
						newDate = new Date(
							time[timezone].date.getTime() + 1 * 1000
						)
					}

					return {
						...time,
						[timezone]: {
							hour: newDate.getHours(),
							minute: newDate.getMinutes(),
							second: newDate.getSeconds(),
							date: newDate,
						},
					}
				})
			}, 1000)

			intervalIds.push(intervalId)
		})

		return () => {
			intervalIds.forEach(clearInterval)
		}
	}, [Timezone])

	return (
		<TimeContainerParent>
			{Object.keys(Time).map(timezone => (
				<TimeContainer key={timezone}>
					<TimeText>{Time[timezone]?.hour}</TimeText>
					<TimeText>{Time[timezone]?.minute}</TimeText>
					<TimeText>{Time[timezone]?.second}</TimeText>
				</TimeContainer>
			))}
		</TimeContainerParent>
	)
}

export default DigitalClock
