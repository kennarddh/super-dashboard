const OffsetToHourAndMinute = offset => {
	const hour = Math.floor(offset / 3600)
	const minute = Math.floor((offset % 3600) / 60)

	return { hour, minute }
}

export default OffsetToHourAndMinute
