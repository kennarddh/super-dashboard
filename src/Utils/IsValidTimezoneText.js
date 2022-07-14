const IsValidTimezoneText = timezoneText => {
	const regex = /^(GMT|UTC)[+-]([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/gi

	return regex.test(timezoneText)
}

export default IsValidTimezoneText
