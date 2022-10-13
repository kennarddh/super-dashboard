export const IsContainsNationalHoliday = holidaysArray =>
	holidaysArray.some(val => val.isNational)

export const GenerateHolidayTileTitle = holidaysArray => {
	return holidaysArray.reduce((acc, val) => {
		acc += val.isNational ? 'National ' : ''
		acc += val.name

		return acc
	}, '')
}

export const DateCalendarApiFormat = unix => {
	const dateObject = new Date(unix)

	const month = dateObject.getMonth() + 1
	const year = dateObject.getFullYear()
	const date = dateObject.getDate()

	return `${year}-${month}-${date}`
}

const GetTileProps = (day, selectedDate, holidays, unix) => {
	const date = new Date(unix)

	date.setDate(day + 1)

	const props = {}

	if (
		day === new Date().getDate() - 1 &&
		new Date(unix).getMonth() === new Date().getMonth() &&
		new Date(unix).getFullYear() === new Date().getFullYear()
	)
		props.current = true

	if (
		selectedDate &&
		day === new Date(selectedDate).getDate() - 1 &&
		new Date(unix).getMonth() === new Date(selectedDate).getMonth() &&
		new Date(unix).getFullYear() === new Date(selectedDate).getFullYear()
	)
		props.selected = true

	if (
		Object.keys(holidays).includes(DateCalendarApiFormat(date.getTime())) &&
		IsContainsNationalHoliday(
			holidays[DateCalendarApiFormat(date.getTime())]
		)
	) {
		props.red = true
		props.title = GenerateHolidayTileTitle(
			holidays[DateCalendarApiFormat(date.getTime())]
		)
	}

	if (date.getDay() === 0) props.red = true

	return props
}

export default GetTileProps
