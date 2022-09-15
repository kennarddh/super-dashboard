const GetDayName = (unix, locale) => {
	const date = new Date(unix)

	return date.toLocaleDateString(locale, { weekday: 'long' })
}

export default GetDayName
