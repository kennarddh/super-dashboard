import React, { useState } from 'react'
import { useEffect } from 'react'

import { TimeContainer, TimeText } from './Styles'

const Single = ({ offset }) => {
	const [Time, SetTime] = useState({})

	useEffect(() => {
		const utcOffset = new Date().getTimezoneOffset()

		const date = new Date(
			new Date().getTime() +
				offset * 1000 -
				utcOffset * 60 * 1000 +
				10 * 1000 * 60 * 60
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
	}, [offset])

	return (
		<TimeContainer>
			<TimeText>{Time?.hour}</TimeText>
			<TimeText>{Time?.minute}</TimeText>
			<TimeText>{Time?.second}</TimeText>
		</TimeContainer>
	)
}

export default Single
