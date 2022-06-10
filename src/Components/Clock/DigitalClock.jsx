import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
	const [Timezone] = useState(['UTC+7'])

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
		<div>
			{Object.keys(Time).map(timezone => (
				<div key={timezone}>
					<p>{Time[timezone]?.hour}</p>
					<p>{Time[timezone]?.minute}</p>
					<p>{Time[timezone]?.second}</p>
				</div>
			))}
		</div>
	)
}

export default DigitalClock
