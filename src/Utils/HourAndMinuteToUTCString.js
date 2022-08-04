const HourAndMinuteToUTCString = object => {
	const hour = object.hour.toString().padStart(2, '0')
	const minute = object.minute.toString().padStart(2, '0')

	return `UTC${object.sign > 0 ? '+' : '-'}${hour}:${minute}`
}

export default HourAndMinuteToUTCString
