import React, { useState, useEffect } from 'react'

import OffsetToHourAndMinute from 'Utils/OffsetToHourAndMinute'
import HourAndMinuteToUTCString from 'Utils/HourAndMinuteToUTCString'
import SetImmediateInterval from 'Utils/SetImmediateInterval'

import { TimeContainer, TimeText, TimeTextSeparator } from './Styles'

const Single = ({ offset, showRemoveModal }) => {
	const [Time, SetTime] = useState({})

	useEffect(() => {
		const utcOffset = new Date().getTimezoneOffset()

		const date = new Date(
			new Date().getTime() +
				offset * 1000 -
				utcOffset * 60 * 1000 +
				10 * 1000 * 60 * 60
		)

		const intervalId = SetImmediateInterval(() => {
			SetTime(time => {
				let newDate = date

				if (time?.date) {
					newDate = new Date(time.date.getTime() + 1 * 1000)
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
		<TimeContainer
			onClick={() => showRemoveModal && showRemoveModal(offset)}
			title={HourAndMinuteToUTCString(OffsetToHourAndMinute(offset))}
		>
			<TimeText>{Time?.hour?.toString()?.padStart(2, '0')}</TimeText>
			<TimeTextSeparator>:</TimeTextSeparator>
			<TimeText>{Time?.minute?.toString()?.padStart(2, '0')}</TimeText>
			<TimeTextSeparator>:</TimeTextSeparator>
			<TimeText>{Time?.second?.toString()?.padStart(2, '0')}</TimeText>
		</TimeContainer>
	)
}

export default Single
