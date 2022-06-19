import React, { useState } from 'react'
import { useEffect } from 'react'

import { TimeContainer, TimeText } from './Styles'

const Single = ({ timezone }) => {
	const [Time, SetTime] = useState({})

	useEffect(() => {
		const hourAdd = parseInt(timezone.split('UTC')[1])

		const offset = new Date().getTimezoneOffset()

		const date = new Date(
			new Date().getTime() + offset * 60000 + hourAdd * 60 * 60000
		)

		const intervalId = setInterval(() => {
			SetTime(time => {
				let newDate = date

				if (time?.date) {
					newDate = new Date(time.date.getTime() + 1 * 1000 + 1)
				}

				return {
					hour: newDate.getHours(),
					minute: newDate.getMinutes(),
					second: newDate.getSeconds(),
					date: newDate,
				}
			})
		}, 1000)

		return () => clearInterval(intervalId)
	}, [timezone])

	return (
		<TimeContainer>
			<TimeText>{Time?.hour}</TimeText>
			<TimeText>{Time?.minute}</TimeText>
			<TimeText>{Time?.second}</TimeText>
		</TimeContainer>
	)
}

export default Single
