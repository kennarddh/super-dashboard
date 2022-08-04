const OffsetToHourAndMinute = offset => {
	const sign = Math.sign(offset)

	offset = Math.abs(offset)

	const hour = Math.floor(offset / 3600)
	const minute = Math.floor((offset % 3600) / 60)

	return { hour, minute, sign }
}

export default OffsetToHourAndMinute
