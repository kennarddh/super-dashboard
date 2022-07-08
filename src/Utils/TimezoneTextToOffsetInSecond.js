const TimezoneTextToOffsetInSecond = timezoneText => {
	const timezone = timezoneText.substring(3)

	const sign = parseInt(timezone[0] + '1')

	const time = timezone.substring(1)

	const [hours, minutes] = time.split(':').map(str => parseInt(str, 10))

	const offset = (hours * 60 + minutes) * 60 * sign

	return offset
}

export default TimezoneTextToOffsetInSecond
